import React, { Component } from 'react';
import './Tags.css';
import { Link } from 'react-router-dom';
import { getArticlesByTag } from '../../http/api';

const data = [
	{
		'id': '1',
		'name': 'HTML5',
		'articlesNum': '1',
		'articles': [
			{
				artId: '1',
				title: '玩转 CSS3 filter 滤镜',
				date: '08-16'
			},
			{
				artId: '2',
				title: '玩转 CSS3 filter 滤镜',
				date: '08-16'
			},
			{
				artId: '3',
				title: '玩转 CSS3 filter 滤镜',
				date: '08-16'
			}
		]
	}
];

class CategoryDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articlesList: [],
			categoryInfo: {}
		}
		this._getArticlesByTag();
	}

	// 获取分类列表
	_getArticlesByTag = () => {
		let data = {
			tag: this.props.match.params.tid
		}
		getArticlesByTag(data).then((res)=>{
			let code = res.data.code;
			let msg = res.data.msg;
			if(code === 200) {
				this.setState({
					articlesList: res.data.data.articles,
					categoryInfo: res.data.data.category
				});
			}
		})
	}

	render() {
		const { articlesList, categoryInfo } = this.state;
		const categories = articlesList.map(item => {
			return  <li key={item.id}>
						{item.date}<Link to={'/articles/detail/'+item.id}>&nbsp;{item.title}</Link>
					</li>
		})
		return (
			<div className="categories">
				<div className="categories__title">
					<h1>{this.props.match.params.tid}标签</h1>
					<h4>总计{articlesList.length}篇文章</h4>
				</div>
				<ul className="categories__itemWrap categories__itemWrap--detail">
					{categories}
				</ul>
			</div>
		);
	}
}

export default CategoryDetail;