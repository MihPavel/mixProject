import React, {Component} from 'react'

export default (OriginalClass) => class WrappedComponent extends Component{
  state = {
    idOpen: null
  }
  toggleOpen = (id) => nv => {
    let rezult = id;
    if(id === this.state.idOpen){
      rezult = null;
    }
    this.setState({
      idOpen: rezult
    });
  }
  render(){
    return(
      <OriginalClass {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    )
  }
}