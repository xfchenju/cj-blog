import React, { Component } from 'react';
import './Articles.css';
import { Icon } from 'antd';


export default class ArticleNav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { createdAt, category, hits, stars } = this.props.nav;
		return (
			<div className="article__nav">
				<Icon type="user"/>&nbsp;发表于{createdAt}&nbsp;|&nbsp;
				<Icon type="file"/>&nbsp;分类于{category}&nbsp;|&nbsp;
				<Icon type="user"/>&nbsp;阅读数{hits}&nbsp;|&nbsp;
				<Icon type="star"/>&nbsp;喜欢数{stars}
			</div>
		)
	}
}