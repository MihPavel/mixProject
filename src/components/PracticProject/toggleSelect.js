import React, {Component} from 'react'

const styleSelect = {
  background: "white",
};
const styleDefault = { 
  border: "none"
};

export default class ToggleOpen extends Component{
  state = {
    isSelect: false
  }
  componentWillReceiveProps = (props) => {
    this.setState({
      isSelect: this.props.defaultSelect
    });
  }
  toggleSelect = () => {
    this.setState({
      isSelect: !this.state.isSelect
    });
  }
  render(){
    let style = this.state.isSelect ? styleSelect : styleDefault;
    return(
      <span style = {style} onClick = {this.toggleSelect}>
        {this.props.children}
      </span>
    )
  }
}