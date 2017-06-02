const INITIAL_STATE = {
  mailing_list_email: '',
  artist_name: '',
  artist_website: '',
  bio: '',
  email: '',
  phone: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'change-state') {
    return Object.assign({}, state, {
      [action.propName]: action.value
    });
  } else if (action.type === 'error') {
    return Object.assign({}, state, {
      errorMessage: action.error
    })
  }
  return state;
}
