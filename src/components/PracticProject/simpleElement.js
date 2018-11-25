import React, {Component} from 'react';
import ToggleSelect from './toggleSelect';
class SimpleElement extends Component{

  render(){
    return(
        <div>
          <p style = {this.props.style} onClick = {this.props.onclick}>Текст текст</p>
        </div>
    );
  }
}

export default ToggleSelect(SimpleElement);