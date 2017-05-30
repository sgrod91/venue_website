import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Calendar.actions';
import dateFormat from 'dateformat';

class CalendarPage extends React.Component {
  componentDidMount() {
    this.props.loadCalendarPage();
  }
  render() {
    let grid = [
      [1,2,3,4,5,6,7],
      [8,9,10,11,12,13,14],

      ]
    return (
      <div>
        <div className="row">
          <div className="box">
            Sun
          </div>
          <div className="box">
            Mon
          </div>
          <div className="box">
            Tue
          </div>
          <div className="box">
            Wed
          </div>
          <div className="box">
            Thu
          </div>
          <div className="box">
            Fri
          </div>
          <div className="box">
            Sat
          </div>
        </div>
        {grid.map(numbers =>
          <div className="row">
            {numbers.map(item => <div className="box"> {item} </div>)}

          </div> )}


      </div>
    );
  }
}

const CalendarContainer = ReactRedux.connect(
  state => state.home,
  actions
)(CalendarPage);

export default CalendarContainer;
