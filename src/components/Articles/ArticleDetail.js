import React, { Component } from 'react';
import './Articles.css';
import ArticleNav from './ArticleNav';
import { getArticleDetail } from '../../http/api';

const data = [
	{
		'id': '1',
		'title': 'vue-manage-system 后台管理系统开发总结',
		'content': 'vue-manage-system，一个基于 Vue.js 和 element-ui 的后台管理系统模板，从2016年年底第一个commit，到现在差不多两年了，GitHub上也有了 5k star，也是这些让我有了持续更新的动力，其中也踩了很多坑，在这总结一下。',
		'banner': 'http://blog.gdfengshuo.com/images/post/wms.png',
		'category': '前端',
		'tags': ['html', 'css', 'react'],
		'created_at': '2018-09-12',
		'viewCount': '222',
		'stars': '99'
	},
]
export default class ArticleDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: {}
		}
		this._getArticleDetail();
	}

	// 获取文章详情
	_getArticleDetail = () => {
		let data = {
			id: this.props.match.params.id
		}
		getArticleDetail(data).then((res)=>{
			let code = res.data.code;
			let msg = res.data.msg;
			if(code === 200) {
				this.setState({
					detail: res.data.data.detail
				});
			}
		})
	}

	render() {
		const { title, content, created_at, category, viewCount, stars } = this.state.detail;
		const nav = {
			created_at: created_at,
			category: category,
			viewCount: viewCount,
			stars: stars,
		}
		return (
			<div className="article__detail">
				<h2 className="article__detailTitle">{title}</h2>
				<ArticleNav nav={nav} />
				<p className="article__detailContent" dangerouslySetInnerHTML={{ __html:content}}>{}</p>
			</div>
		)
	}
}