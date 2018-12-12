import React, { Component } from 'react';
import './Articles.css';
import { Icon } from 'antd';
import moment from 'moment';


export default class ArticleNav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { created_at, category, viewCount, stars } = this.props.nav;
		return (
			<div className="article__nav">
				<Icon type="user"/>&nbsp;发表于{moment(created_at).format('YYYY-MM-DD')}&nbsp;|&nbsp;
				<Icon type="file"/>&nbsp;分类于{category}&nbsp;|&nbsp;
				<Icon type="user"/>&nbsp;阅读数{viewCount}&nbsp;|&nbsp;
				<Icon type="star"/>&nbsp;喜欢数{stars || 0}
			</div>
		)
	}
}