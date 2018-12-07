import React, { Component } from 'react';
import './Articles.css';
import { Button, Icon } from 'antd';

const data = [
	{
		'id': '1',
		'title': 'vue-manage-system 后台管理系统开发总结',
		'content': 'vue-manage-system，一个基于 Vue.js 和 element-ui 的后台管理系统模板，从2016年年底第一个commit，到现在差不多两年了，GitHub上也有了 5k star，也是这些让我有了持续更新的动力，其中也踩了很多坑，在这总结一下。',
		'banner': '文章封面图',
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
		state: {

		}
		console.log(this.props.item, 'props');
	}
	render() {
		const { id, title, content, banner, category, tags, createdAt, hits, stars } = this.props.item;
		return (
			<div className="article">
				<h2 className="article__title">{title}</h2>
				<div className="article__nav"><Icon type="user"/>&nbsp;发表于{createdAt}&nbsp;|&nbsp;<Icon type="file"/>&nbsp;分类于{category}&nbsp;|&nbsp;<Icon type="user"/>&nbsp;阅读数{hits}&nbsp;|&nbsp;<Icon type="star"/>&nbsp;喜欢数{stars}</div>
				<p className="article__content">{content}</p>
				<Button className="article__btn">阅读全文&nbsp;»</Button>
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
			</div>
		);
	}
}