import React, {Component} from 'react';
const style = {
  margin: "0px",
  display: "inline-block",
  webkitUserSelect: "none",
  mozUserSelect: "none",
  msUserSelect: "none",
  marginTop: "20px"
}
class SimpleElement extends Component{
  render(){
    return(
      <p style={style}>Элемент</p>
    );
  }
}

export default SimpleElement;