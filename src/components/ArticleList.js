import React, {Component} from 'react';
import Article from './Article';
import Accordion from '../decorators/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtredArticlesSelector} from '../selectors';
import {loadAllArticles} from '../actionCreators';
import Loader from './Loader';
class ArticleList extends Component{
	static propTypes = {
		//from connect
		idOpen: PropTypes.string,
		toggleOpen: PropTypes.func.isRequired
	}
	componentDidMount(){
		const {loadAllArticles, loading, loaded} = this.props;
		console.log("list did mount");
		if(!loaded || !loading) loadAllArticles();
	}
	render(){
		console.log("list render");
		let {toggleOpen, idOpen, articles, loading} = this.props;
		if(loading) return <Loader/>
		const articleElements = articles.map( (article) =>
			<li key = {article.id}>
				<Article article = {article} 
								 isOpen = {article.id === idOpen} 
								 toggleOpen={toggleOpen(article.id)}/>
			</li>
		);
		return (
			<ul>{articleElements}</ul>
		)
	}
}
export default connect((state) => {
	console.log("list connect", state);
	return {
		articles: filtredArticlesSelector(state),
		loading: state.articles.loading,
		loaded: state.articles.loaded
	}
}, {loadAllArticles})( Accordion(ArticleList) )