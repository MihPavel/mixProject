import React, {Component} from 'react';
import DataRange from './DataRange';
import SelectArticle from './SelectArticle';

class Filtres extends Component{
  render(){
    return(
        <div>
          <DataRange />
          <SelectArticle />
        </div>
    );
  }
}

export default Filtres;