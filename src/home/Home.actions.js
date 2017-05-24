import $ from 'jquery';

export function loadShows() {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/shows')
    .then(data => dispatch({
      type: 'load-shows',
      data: data
    }));
  };
  return asyncAction;
}
