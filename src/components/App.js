import React, {Component} from 'react';
import ArticleList from './ArticleList';
import Counter from './Counter';
import Store from '../store';
import Filters from './filtres';
import {Provider} from 'react-redux';
import PracticProject from './PracticProject';
class App extends Component{
  render(){
    return(
        <Provider store={Store}>
          <div>
            <PracticProject />
            <Filters />
            <ArticleList />
            <Counter />
          </div>
        </Provider>
    );
  }
}

export default App;