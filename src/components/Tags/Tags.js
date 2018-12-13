import React, { Component } from 'react';
import './Tags.css';
import { Link } from 'react-router-dom';
import { getTagsList } from '../../http/api';

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
			tagsList: []
		}
		this._getTagsList();
	}

	// 获取分类列表
	_getTagsList = () => {
		getTagsList().then((res)=>{
			let code = res.data.code;
			let msg = res.data.msg;
			if(code === 200) {
				this.setState({
					tagsList: res.data.data.tags
				});
			}
		})
	}


	render() {
		const { tagsList } = this.state;
		const tags = tagsList.map(item => {
			return <li key={item.id}>
						<Link to={'/tags/'+item.name}>{item.name}</Link>
					</li>
		})
		return (
			<div className="tags">
				<div className="tags__title">
					<h1>tags</h1>
					<h4>目前共计{tagsList.length}个标签</h4>
				</div>
				<ul className="tags__itemWrap">
					{tags}
				</ul>
			</div>
		);
	}
}

export default Categories;