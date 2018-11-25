import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../actionCreators';

class Counter extends Component{
	onIncrement = () => {
		const {increment} = this.props;
		
		increment(); // достаем его исз пропсов а не глобалльно сверху
	}
	render(){
		return (
			<div>
				<h2>{this.props.counter}</h2>
				<button onClick={this.onIncrement}> increment </button>
			</div>
		)
	}
}

Counter.propTypes = {
	counter: PropTypes.number,
	increment: PropTypes.func
};
// коннект связывает стор и компонент
export default connect((state) => ({
	counter: state.count
}), { increment })(Counter);

/*
	const mapToDispatch = { increment: increment }; // название экшена в обЪекте

	function makeStateToProps(state){               // функция принимающая стейт 
		return {                                      //и передающая ее в компонент как counter
			counter: state.count
		}
	}

	const decorator = connect(makeStateToProps, mapToDispatch); // декорат запом экшен и передает вход знач
	export default decorator(Counter);          // кидаем в декоратор наш класс
*/

