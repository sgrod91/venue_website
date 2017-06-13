import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Calendar.actions';
import dateFormat from 'dateformat';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

function date_checker(date, mydate) {
  let d = new Date(date)
  if(mydate.year === d.getFullYear()
      && mydate.month === d.getMonth()
      && mydate.date === d.getDate()
    ) {
    return true
  } else {
    return false
  };
}

function getEventsForDate(events, mydate) {
  let eventArray = [];
  for (let i = 0; i < events.length; i++) {
    if (date_checker(events[i].date, mydate)) {
      eventArray.push(events[i]);
    }
  }
    console.log(eventArray);
    return eventArray
}

class CalendarPage extends React.Component {
  componentDidMount() {
    this.props.loadCalendarPage();

  }
  getEventsFor(mydate) {
    date_checker()
    this.props.events
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
        let dateObj = {
          year: year,
          month: date.getMonth(),
          date: date.getDate()
        };
        if (childArr.length < 7) {
          childArr.push(dateObj);
        }else{
          arr.push(childArr);
          childArr = [];
          childArr.push(dateObj);
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
        <h3>
        <button onClick={() => this.props.previousMonth()}>Previous Month</button>
        {monthArr[this.props.month]} {this.props.year}
        <button onClick={() => this.props.nextMonth()}>Next Month</button>
        </h3>
        <div className="row">
          <div className="box">
            <b>Sun</b>
          </div>
          <div className="box">
            <b>Mon</b>
          </div>
          <div className="box">
            <b>Tue</b>
          </div>
          <div className="box">
            <b>Wed</b>
          </div>
          <div className="box">
            <b>Thu</b>
          </div>
          <div className="box">
            <b>Fri</b>
          </div>
          <div className="box">
            <b>Sat</b>
          </div>
        </div>
        {arr.map((numbers, index) =>

          <div key={index} className="row">
            {numbers.map((date, index) =>


              <div key={index} className="box">

                {date.date}
                {getEventsForDate(this.props.events, date).map(result =>
                  <Link key={result.id} to={"shows/" + result.id}>{result.artist_name}</Link>)
                }

              </div>


            )}

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
