//import ValidateInput from './componentsControls/validateInput'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../actionCreators';

class CommentForm extends Component{
  state ={
    user: "",
    text: ""
  }
  handleChange = (type) => (ev) => {
    let {value} = ev.target;
    this.setState({
      [type]: value
    });
  }
  handleSubmit = (event) => {
    //addComment(this.state.user, this.state.text, this.props.articleId);
    event.preventDefault();
    this.props.addComment(this.state);
  }
  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        User:<input value = {this.state.user} onChange={this.handleChange("user")} />
        <br />
        Comment:<input value = {this.state.text} onChange={this.handleChange("text")} />
        <input type="submit" value="Добавить коммент" />
      </form>
    )
  }
}
export default connect(null, (dispatch, ownProps) => ({
  addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))( CommentForm );

