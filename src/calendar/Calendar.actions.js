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
