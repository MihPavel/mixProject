import React, {Component} from 'react';

const styleSpace = {
  height: "300px",
  width: "200px",
  background: "grey"
}
const styleSelectSpace = {
  position: "absolute",
  border: "1px solid green",
  background: "yellow",
  opacity: "0.5"
}

class HoverSpace extends Component{
  state = {
    onSelect: false,
    startPoint: {},
    endPoint: {}
  }

  onSelectStart = (ev) =>{
    console.log(this.props.children);
    this.setState({
      onSelect: true,
      startPoint: {
        x: ev.pageX,
        y: ev.pageY
      }
    });
  }
  onSelectEnd = (ev) =>{
    this.setState({
      onSelect: false,
      startPoint: {},
      endPoint: {}
    });
  }
  onSelectMove = (ev) =>{
    if(!this.state.onSelect) return;
    this.setState({
      endPoint: {
        x: ev.pageX,
        y: ev.pageY
      }
    });
  }
  calculateStylesSelectSpace(endPoint, startPoint){
    if(!this.state.onSelect) return styleSelectSpace;
    
    let left = `${Math.min(endPoint.x, startPoint.x)}px`;
    let top = `${Math.min(endPoint.y, startPoint.y)}px`;
    let height = `${Math.abs(endPoint.y - startPoint.y)}px`;
    let width = `${Math.abs(endPoint.x - startPoint.x)}px`;

    return Object.assign({}, styleSelectSpace, { left, top, height, width })
  }
  
  render(){
    let {endPoint, startPoint} = this.state;
    let styles = this.calculateStylesSelectSpace(endPoint, startPoint);
    return(
      <div>
        <div style={styleSpace} onMouseDown={this.onSelectStart} onMouseUp={this.onSelectEnd} onMouseMove={this.onSelectMove}>
          {this.props.children}
          <div style={styles}></div>
        </div>
      </div>
    );
  }
}

export default HoverSpace;