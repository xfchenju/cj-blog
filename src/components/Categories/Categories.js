import React, { Component } from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';
import { getCategoriesList } from '../../http/api';

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
		this.state = {
			categoriesList: []
		}
		this._getCategoriesList();
	}

	// 获取分类列表
	_getCategoriesList = () => {
		getCategoriesList().then((res)=>{
			let code = res.data.code;
			let msg = res.data.msg;
			if(code === 200) {
				this.setState({
					categoriesList: res.data.data.categorys[0]
				});
			}
		})
	}


	render() {
		const { categoriesList } = this.state;
		const categories = categoriesList.map(item => {
			return <li key={item.id}>
						<Link to={'/categories/'+item.name}>{item.name}<span>&nbsp;({item.articles_num})</span></Link>
					</li>
		})
		return (
			<div className="categories">
				<div className="categories__title">
					<h1>categories</h1>
					<h4>总计{categoriesList.length}个分类</h4>
				</div>
				<ul className="categories__itemWrap">
					{categories}
				</ul>
			</div>
		);
	}
}

export default Categories;