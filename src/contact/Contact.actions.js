import $ from 'jquery';
import {hashHistory} from 'react-router';

export function changeState(value, propName) {
  return {
    type: 'change-state',
    value: value,
    propName: propName
  };
}

export function error(resp) {
  return {
  type: 'error',
  error: resp.responseText
  };
}

export function sendMailingListInfo(email) {
  let asyncAction = function(dispatch) {
    $.ajax({
      type: "POST",
      url: "http://localhost:4000/api/mailinglist",
      contentType: 'application/json',
      data: JSON.stringify({
        email: email})
    })
    .then(result => {
      dispatch({type: 'mailing list success'});
      hashHistory.push('/contact')
    })
    .catch(resp => dispatch(error(resp)));
  };
  return asyncAction;
}

export function sendGigRequest(artist_name, artist_website, bio, email, phone) {
  let asyncAction = function(dispatch) {
    $.ajax({
      type: "POST",
      url: "http://localhost:4000/api/bookevent/",
      contentType: 'application/json',
      data: JSON.stringify({
        artist_name: artist_name,
        artist_website: artist_website,
        bio: bio,
        email: email,
        phone: phone})
      })
      .then(result => {
        dispatch({type: 'gig request success'});
        hashHistory.push('/contact')
      })
      .catch(resp => dispatch(error(resp)));
    };
    return asyncAction;
}
