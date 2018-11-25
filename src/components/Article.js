import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import ToggleOpen from '../decorators/toggleOpen'
import {connect} from 'react-redux';
import {deleteArticle, loadArticle} from '../actionCreators';
import Loader from './Loader';

class Article extends Component{
	static propTypes = {
		article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			comments: PropTypes.array
		}).isRequired,
		isOpen: PropTypes.bool.isRequired,
		toggleOpen: PropTypes.func.isRequired
	}
	componentWillReceiveProps({isOpen, loadArticle, article}){
		if(isOpen && !article.text && !article.loading) loadArticle(article.id)
	}
	getBody(){
		const {article, isOpen} = this.props;
		if(!isOpen) return null;
		if(article.loading) return <Loader/>
		console.log("article getBody",article.text);
		return (
			<section>
				{article.text}
				<CommentList article = {article} />
			</section>
		)
	}
	handleDelete = () => {
		const {deleteArticle, article} = this.props;
		deleteArticle(article.id);
	}
	render(){
		const {article, isOpen, toggleOpen} = this.props;
		return (
			<div>
				<h3> {article.title} </h3>
				<button onClick ={this.handleDelete}>удалить</button> 
				<button onClick= { toggleOpen }>
					{isOpen ? 'close' : 'open'}
				</button>
				{this.getBody()}
			</div>
		)
	}
}

export default connect(null, { deleteArticle, loadArticle })(Article)