import React, { Component } from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

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
	}
	render() {
		const categories = data[0]['articles'].map(item => {
			return  <li key={item.id}>
						{item.date}<Link to={'/articles/detail/'+item.artId}>&nbsp;{item.title}</Link>
					</li>
		})
		return (
			<div className="categories">
				<div className="categories__title">
					<h1>{data[0].name}分类</h1>
					<h4>总计{data[0].articles.length}篇文章</h4>
				</div>
				<ul className="categories__itemWrap categories__itemWrap--detail">
					{categories}
				</ul>
			</div>
		);
	}
}

export default CategoryDetail;