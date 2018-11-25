import React, {Component} from 'react'
import Input from './input'
import PropTypes from 'prop-types';

const errorStyle = { background: "red", color: "yellow" };
const defaultStyle = { background: "", color: "" };

class ValidateInput extends Component{
  state = {
    text: ""
  } 
  onchange = (ev) => {
    let {min, max} = this.props.leng;
    if(ev.target.value.length > max) return;
    
    this.setState({
      text: ev.target.value
    });
  }
  validate(){
    let text = this.state.text;
    let {min, max} = this.props.leng;
    if(text.length < min || text.length > max){
      return errorStyle;
    }
    return defaultStyle;
  }
  render(){
    let style = this.validate();
    return(
      <div>
        <span>{this.props.title}</span><Input value = {this.state.text} style={style} onchange = {this.onchange} />
      </div>
    )
  }
}

ValidateInput.propTypes = {
  leng: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number
  }),
  title: PropTypes.string
};

export default ValidateInput;