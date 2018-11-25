import React, {Component} from 'react'

export default (OriginalClass) => class ToggleOpen extends Component{
  state = {
    isSelect: false
  }
  toggleSelect = () => {
    console.log("click");
    this.setState({
      isSelect: !this.state.isSelect
    });
  }
  render(){
    const select = {
      border: "1px solid black"
    };
    let addStyle = this.state.isSelect ? select : { border: "none"};
    return(
      <OriginalClass style = {addStyle}  {...this.props} {...this.state} onclick = {this.toggleSelect}/>
    )
  }
}