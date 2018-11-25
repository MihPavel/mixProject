import React, {Component} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import {changeDataRange} from '../../actionCreators';
import {connect} from 'react-redux';

import 'react-day-picker/lib/style.css';
class DataRange extends Component{
  handleDayClick = (day) => {
    const {range, changeDataRange} = this.props;
    changeDataRange(DateUtils.addDayToRange(day, range));
  }
  render(){
    const {from, to} = this.props.range;
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
    return(
      <div>
        <DayPicker onDayClick={this.handleDayClick}
                   selectedDays={day => DateUtils.isDayInRange(day, {from, to})}/>
                   {selectedRange}
      </div>
      
    );
  }
}

export default connect(state => ({
	range: state.filters.dataRange
}), { changeDataRange })(DataRange)
