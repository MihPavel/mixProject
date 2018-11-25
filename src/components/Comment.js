import React from 'react';
import {connect} from 'react-redux';
import {commentSelectorFactory} from '../selectors';
function Comment({comment}){
	return (
		<div>
			<div>Пользователь {comment.user}</div>
			<div>{comment.text}</div>
		</div>
	)
	
}

const mapStateToProps = () => {
	const commentSelector = commentSelectorFactory();
	return (state, ownProps) => {
		console.log(state);
		return commentSelector(state, ownProps);
	}
}
	
//ownProps то, что реально пришло в пропсах
export default connect(mapStateToProps)(Comment);