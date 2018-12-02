import React, {Component} from 'react';
import ToggleSelect from './toggleSelect';

class RenderChildren extends Component{
  cons(){
    console.log("renderChildren");
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.childrenData !== this.props.childrenData;
  }
  componentDidMount = () => {
    this.props.sendChildren([].slice.call(this.refs.childrenCollection.children));
  }
  render(){
    let {childrenComponents, childrenData} = this.props;
    
    const childrenWithSelect = React.Children.map(childrenComponents, (child, index) => {
      this.cons();
      let defaultSelect = !childrenData.length ? false : childrenData[index].selected;
      return <ToggleSelect defaultSelect = { defaultSelect }> { child } </ToggleSelect>
    });
    
    return(
      <div ref='childrenCollection'>
        {childrenWithSelect}
      </div>
    );
  }
}

export default RenderChildren;