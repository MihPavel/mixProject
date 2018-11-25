import React, {Component} from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {changeSelection} from '../../actionCreators';
import {mapToArr} from '../../lib';

class SelectArticle extends Component{
  onchangeSelection = (selected) => {
    this.props.changeSelection(selected.map(option => option.value));
  }
  
  render(){
    let {articles, selected} = this.props;
    const options = articles.map(article => ({
        label: article.title,
        value: article.id
    }));

    const selectedValue = [];
    
    articles.forEach(article => {
      if( selected.includes(article.id) ){
        selectedValue.push({
          label: article.title,
          value: article.id
        });
      }
    });
    return(
      <Select options={options} 
              value={selectedValue} 
              onChange={this.onchangeSelection} 
              isMulti = {true} />
    );
  }
}

export default connect(state => ({
  selected: state.filters.selected,
  articles: mapToArr(state.articles.entities)
}), {changeSelection})( SelectArticle )
