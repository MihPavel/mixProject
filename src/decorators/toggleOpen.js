import React, {Component} from 'react'

export default (OriginalClass) => class Accordion extends Component{
  state = {
    isOpen: false
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
      <OriginalClass  {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    )
  }
}