import React, {Component} from 'react';
import RenderChildren from './renderChildren';

const styleSpace = {
  height: "500px",
  width: "200px",
  padding: "20px",
  background: "skyblue"
}
const styleSelectSpace = {
  position: "absolute",
  border: "1px solid green",
  background: "yellow",
  opacity: "0.5"
}

class HoverSpace extends Component{
  constructor(props) {
    super(props);

    this.state = { 
      onSelect: false,
      startPoint: {},
      endPoint: {},
      childrenData: [],
      childrenComponents: props.children
    };
  }
  onRenderedChildren = (massChildren) => {
    const childrenData = massChildren.map((el) => {
      return {
        childBound: el.getBoundingClientRect(),
        selected: false
      }
    });
    this.setState({ childrenData: childrenData });
  }

  onSelectStart = (ev) => {
    if(!ev.target.firstElementChild) return;

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
    let changeHappened = false;

    let {childrenData, onSelect, startPoint} = this.state;

    let endPoint = { 
      x: ev.pageX, 
      y: ev.pageY 
    }
    
    if(!onSelect) return;

    let newChildrenState = childrenData.slice();
    childrenData.forEach((childData, currentIndex) => {
      let childBound = childData.childBound;

      let enclosingSquareTop = Math.min(
        endPoint.y, startPoint.y, 
        childBound.top, childBound.bottom
      );
      let enclosingSquareBottom = Math.max(
        endPoint.y, startPoint.y,
        childBound.top, childBound.bottom
      );
      let enclosingSquareLeft = Math.min(
        endPoint.x, startPoint.x,
        childBound.left, childBound.right
      );
      let enclosingSquareRight = Math.max(
        endPoint.x, startPoint.x, 
        childBound.left, childBound.right
      );
      
      let heightSelectedArea = Math.abs(endPoint.y - startPoint.y);
      let widthSelectedArea = Math.abs(endPoint.x - startPoint.x);
      
      let heigthEnclosingSquare = enclosingSquareBottom - enclosingSquareTop;
      let widthEnclosingSquare = enclosingSquareRight - enclosingSquareLeft;
      
      if((heigthEnclosingSquare - heightSelectedArea - childBound.height) < 0 && (widthEnclosingSquare - widthSelectedArea - childBound.width) < 0){
        if(!childData.selected) {
          newChildrenState[currentIndex].selected = true;
          changeHappened = true;
        }
      } else {
        if(childData.selected) {
          changeHappened = true;
          newChildrenState[currentIndex].selected = false;
        }
      } 
    });

    if(changeHappened) {
      console.log("setstatemove");
      this.setState({ 
        endPoint,
        childrenData: newChildrenState
       });
    } else {
      this.setState({ 
        endPoint
      });
    }
  }
  calculateStylesSelectSpace(endPoint, startPoint){
    if(!this.state.onSelect) return styleSelectSpace;
    
    let left = `${Math.min(endPoint.x, startPoint.x)}px`;
    let top = `${Math.min(endPoint.y, startPoint.y)}px`;
    let height = `${Math.abs(endPoint.y - startPoint.y)}px`;
    let width = `${Math.abs(endPoint.x - startPoint.x)}px`;

    return Object.assign({}, styleSelectSpace, { left, top, height, width })
  }
  cons(){
    console.log("hoverSpace");
  }
  
  render(){
    this.cons();
    let {endPoint, startPoint, childrenData, childrenComponents} = this.state;
  
    let styles = this.calculateStylesSelectSpace(endPoint, startPoint); 
    return(
        <div style={styleSpace} onMouseDown={this.onSelectStart} onMouseUp={this.onSelectEnd} onMouseMove={this.onSelectMove}>
          <RenderChildren sendChildren = {this.onRenderedChildren}
                          childrenComponents = {childrenComponents}
                          childrenData = {childrenData}/>
          <div style={styles}></div>
        </div>
    );
  }
}

export default HoverSpace;