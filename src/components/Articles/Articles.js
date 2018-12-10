import React, { Component } from 'react';
import './Articles.css';
import { Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ArticleNav from './ArticleNav';

const data = [
	{
		'id': '1',
		'title': 'vue-manage-system 后台管理系统开发总结',
		'content': 'vue-manage-system，一个基于 Vue.js 和 element-ui 的后台管理系统模板，从2016年年底第一个commit，到现在差不多两年了，GitHub上也有了 5k star，也是这些让我有了持续更新的动力，其中也踩了很多坑，在这总结一下。',
		'banner': 'http://blog.gdfengshuo.com/images/post/wms.png',
		'category': '前端',
		'tags': ['html', 'css', 'react'],
		'createdAt': '2018-09-12',
		'hits': '222',
		'stars': '99'
	},
	{
		'id': '2',
		'title': 'vue-manage-system 后台管理系统开发总结',
		'content': 'vue-manage-system，一个基于 Vue.js 和 element-ui 的后台管理系统模板，从2016年年底第一个commit，到现在差不多两年了，GitHub上也有了 5k star，也是这些让我有了持续更新的动力，其中也踩了很多坑，在这总结一下。',
		'banner': 'http://blog.gdfengshuo.com/images/post/wms.png',
		'category': '前端',
		'tags': ['html', 'css', 'react'],
		'createdAt': '2018-09-12',
		'hits': '222',
		'stars': '99'
	},
	{
		'id': '3',
		'title': 'vue-manage-system 后台管理系统开发总结',
		'content': 'vue-manage-system，一个基于 Vue.js 和 element-ui 的后台管理系统模板，从2016年年底第一个commit，到现在差不多两年了，GitHub上也有了 5k star，也是这些让我有了持续更新的动力，其中也踩了很多坑，在这总结一下。',
		'banner': 'http://blog.gdfengshuo.com/images/post/wms.png',
		'category': '前端',
		'tags': ['html', 'css', 'react'],
		'createdAt': '2018-09-12',
		'hits': '222',
		'stars': '99'
	},
	{
		'id': '4',
		'title': 'vue-manage-system 后台管理系统开发总结',
		'content': 'vue-manage-system，一个基于 Vue.js 和 element-ui 的后台管理系统模板，从2016年年底第一个commit，到现在差不多两年了，GitHub上也有了 5k star，也是这些让我有了持续更新的动力，其中也踩了很多坑，在这总结一下。',
		'banner': 'http://blog.gdfengshuo.com/images/post/wms.png',
		'category': '前端',
		'tags': ['html', 'css', 'react'],
		'createdAt': '2018-09-12',
		'hits': '222',
		'stars': '99'
	}
];

class Article extends Component {
	constructor(props) {
		super(props);
	}

	linkToDetail = (id) => {
		console.log('1')
		console.log(id, 'id')
	}

	render() {
		const { id, title, content, banner, category, tags, createdAt, hits, stars } = this.props.item;
		const nav = {
			createdAt: createdAt,
			category: category,
			hits: hits,
			stars: stars,
		}
		return (
			<div className="article">
				<h2 className="article__title">{title}</h2>
				<ArticleNav nav={nav} />
				<p className="article__content">{content}</p>
				<Link className="article__btn" to='/articles/detail'>阅读全文&nbsp;»</Link>
				<div className="article__banner"><img src={banner} /></div>
			</div>
		);
	}
};

const ArticleList = data.map(item => {
	return (<Article key={item.id} item={item} />);
})

export default class Articles extends Component {
	render() {
		return (
			<div className="articles">
				{ArticleList}
				<div className="articles__paging">这是分页</div>
			</div>
		);
	}
}