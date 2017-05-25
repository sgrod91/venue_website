import $ from 'jquery';

export function getSinglePage(eventID) {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/shows/' + eventID)
    .then(data => dispatch({
      type: 'load-single-event',
      data: data
    }))
  };
  return asyncAction;
}

export function addToCart(eventID) {
  let asyncAction = function(dispatch) {
    $.ajax({
      type: "POST",
      url: "http:/localhost:4000/api/",
      contentType: 'application/json',
      data: JSON.stringify({id: eventID})
    })
    .then(data => dispatch({
      type: 'add-to-cart'
    }));
  };
  return asyncAction;
}
