import React, { Component } from 'react';
import './Articles.css';
import { Button, Icon } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NoMatch from '../NoMatch';
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
]
export default class ArticleDetail extends Component {
	constructor(props) {
		super(props);
		state: {
		}
	}
	render() {
		const { id } = this.props.match;
		const { title, content, createdAt, category, hits, stars } = data[0];
		const nav = {
			createdAt: createdAt,
			category: category,
			hits: hits,
			stars: stars,
		}
		return (
			<div className="article__detail">
				<div className="article__detailTitle">{title}</div>
				<ArticleNav nav={nav} />
				<div className="article__detailContent">{content}</div>
			</div>
		)
	}
}