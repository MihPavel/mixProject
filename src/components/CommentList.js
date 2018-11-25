import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import ToggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import {connect} from 'react-redux';
import {loadComments} from '../actionCreators';

class CommentList extends Component{
	componentWillReceiveProps({isOpen, loadComments, article, loading, loaded}){
		if(isOpen && !loading) loadComments(article.id);
	}
	getBody(){
		const {isOpen, article} = this.props;
		
		if(!isOpen) return null;
		const commentList = article.comments.map( (id) => <li key={id}><Comment id={id} /></li>);
		return (
			<div>
				<CommentForm articleId = {article.id} />
				{commentList}
			</div>
		);
	}
	render(){
		const {isOpen, toggleOpen} = this.props;
		return (
			<div>
				<button onClick={toggleOpen}>{ isOpen ? "Закрыть комментарии" : "Открыть комментарии"}</button>
				{this.getBody()}
			</div>
		)
	}
}
export default connect((state)=>{
	return {
		loading: state.comments.loading,
		loaded: state.comments.loaded
	}
}, {loadComments})( ToggleOpen(CommentList) );

//loadComments
