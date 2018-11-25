import React from 'react';
import PropTypes from 'prop-types';

function Input({value, onchange, style}){
  let {background, color} = style;

  let inputStyle = {
    background: background,
    color: color
  }
	return (
		<input style={inputStyle} type = "text" value = {value} onChange = {onchange} />
	)
}

Input.propTypes = {
  value: PropTypes.string,
  onchange: PropTypes.func.isRequired,
  style: PropTypes.shape({
    background: PropTypes.string,
    color: PropTypes.string,
  })
};

export default Input;