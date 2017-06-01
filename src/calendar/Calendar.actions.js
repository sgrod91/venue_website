import $ from 'jquery';

export function loadCalendarPage() {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/shows')
    .then(data => dispatch({
      type: 'load-calendar',
      data: data
    }));
  };
  return asyncAction;
}

export function previousMonth() {
  return {
    type: 'previous-month'
  };
};

export function nextMonth() {
  return {
    type: 'next-month'
  };
};
