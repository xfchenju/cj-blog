import React, { Component } from 'react';
import './Articles.css';
import { Link, withRouter } from 'react-router-dom';
import ArticleNav from './ArticleNav';
import { getArticlesList } from '../../http/api';

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
	{
		'id': '2',
		'title': 'vue-manage-system 后台管理系统开发总结',
		'content': 'vue-manage-system，一个基于 Vue.js 和 element-ui 的后台管理系统模板，从2016年年底第一个commit，到现在差不多两年了，GitHub上也有了 5k star，也是这些让我有了持续更新的动力，其中也踩了很多坑，在这总结一下。',
		'banner': 'http://blog.gdfengshuo.com/images/post/wms.png',
		'category': '前端',
		'tags': ['html', 'css', 'react'],
		'created_at': '2018-09-12',
		'viewCount': '222',
		'stars': '99'
	},
	{
		'id': '3',
		'title': 'vue-manage-system 后台管理系统开发总结',
		'content': 'vue-manage-system，一个基于 Vue.js 和 element-ui 的后台管理系统模板，从2016年年底第一个commit，到现在差不多两年了，GitHub上也有了 5k star，也是这些让我有了持续更新的动力，其中也踩了很多坑，在这总结一下。',
		'banner': 'http://blog.gdfengshuo.com/images/post/wms.png',
		'category': '前端',
		'tags': ['html', 'css', 'react'],
		'created_at': '2018-09-12',
		'viewCount': '222',
		'stars': '99'
	},
	{
		'id': '4',
		'title': 'vue-manage-system 后台管理系统开发总结',
		'content': 'vue-manage-system，一个基于 Vue.js 和 element-ui 的后台管理系统模板，从2016年年底第一个commit，到现在差不多两年了，GitHub上也有了 5k star，也是这些让我有了持续更新的动力，其中也踩了很多坑，在这总结一下。',
		'banner': 'http://blog.gdfengshuo.com/images/post/wms.png',
		'category': '前端',
		'tags': ['html', 'css', 'react'],
		'created_at': '2018-09-12',
		'viewCount': '222',
		'stars': '99'
	}
];

class Article extends Component {
	constructor(props) {
		super(props);
	}

	linkToDetail = (id) => {
		this.props.linkToDetail(id);
		//this.props.router.push('/articles/detail/'+id);
		//this.props.history.push('/articles/detail/'+id)
	}

	render() {
		const { id, title, content, banner, category, created_at, viewCount, stars } = this.props.item;
		const nav = {
			created_at: created_at,
			category: category,
			viewCount: viewCount,
			stars: stars,
		}
		return (
			<div className="article">
				<h2 className="article__title" onClick={this.linkToDetail.bind(this, id)}>{title}</h2>
				<ArticleNav nav={nav} />
				<p className="article__content">{content}</p>
				<Link className="article__btn" to={'/articles/detail/'+id}>阅读全文&nbsp;»</Link>
				<div className="article__banner"><img src={banner} alt="" /></div>
			</div>
		);
	}
};
withRouter(Article);

class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articlesList: []
		}
		console.log(this.props.history);
		this._getArticlesList();
	}

	// 获取列表数据
	_getArticlesList = () => {
		getArticlesList().then((res)=>{
			let code = res.data.code;
			let msg = res.data.msg;
			if(code === 200) {
				this.setState({
					articlesList: res.data.data.articles
				});
			}
		})
	}

	linkToDetail = (id) => {
		this.props.history.push('/articles/detail/'+id);
	}
	
	render() {
		const { articlesList } = this.state;
		const ArticleList = articlesList.map(item => {
			return (<Article key={item.id} item={item} linkToDetail={this.linkToDetail} />);
		})
		return (
			<div className="articles">
				{ArticleList}
				<div className="articles__paging">这是分页</div>
			</div>
		);
	}
}

export default Articles;