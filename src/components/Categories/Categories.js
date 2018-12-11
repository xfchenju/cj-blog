import React, { Component } from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

const data = [
	{
		'id': '1',
		'name': 'HTML5',
		'articlesNum': '1',
	},
	{
		'id': '2',
		'name': 'nodeJS',
		'articlesNum': '2',
	},
	{
		'id': '3',
		'name': 'vue',
		'articlesNum': '10',
	},
	{
		'id': '4',
		'name': 'reactJS',
		'articlesNum': '3',
	}
];

class Categories extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const categories = data.map(item => {
			return <li key={item.id}>
						<Link to={'/categories/'+item.name}>{item.name}<span>&nbsp;({item.articlesNum})</span></Link>
					</li>
		})
		return (
			<div className="categories">
				<div className="categories__title">
					<h1>categories</h1>
					<h4>总计{data.length}个分类</h4>
				</div>
				<ul className="categories__itemWrap">
					{categories}
				</ul>
			</div>
		);
	}
}

export default Categories;