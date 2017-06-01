import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Calendar.actions';
import dateFormat from 'dateformat';

class CalendarPage extends React.Component {
  componentDidMount() {
    this.props.loadCalendarPage();
  }
  render() {
    let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let arr = [];
    let childArr = [];
    let year = this.props.year;
    let month = this.props.month;
    let first = new Date(year, month, 1);
    for (let i = 1 - first.getDay() ; i <= 40; i++) {
      let date = new Date(year, month, i);
        // console.log(date.getMonth());
      // if(date.getMonth() === month) {
        if (childArr.length < 7) {
          childArr.push(((date.getMonth() + 1) + '/' + date.getDate()));
        }else{
          arr.push(childArr);
          childArr = [];
          childArr.push(((date.getMonth() + 1) + '/' + date.getDate()));
        }
      // }else{
      //   // do nothing
      // }
    }
    console.log(weekdays);
    console.log(arr);
    // console.log(childArr);

    return (
      <div id="calendar">
        <h3><button onClick={() => this.props.previousMonth()}>Previous Month</button>
        {monthArr[this.props.month]}
        <button onClick={() => this.props.nextMonth()}>Next Month</button></h3>
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
        {arr.map((numbers, index) =>
          <div key={index} className="row">
            {numbers.map((item, index) => <div key={index} className="box"> {item} </div>)}

          </div> )}


      </div>
    );
  }
}

const CalendarContainer = ReactRedux.connect(
  state => state.calendar,
  actions
)(CalendarPage);

export default CalendarContainer;
