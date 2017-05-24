const INITIAL_STATE = {
  shows: []
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'load-shows') {
    return Object.assign({}, state, {
      shows: action.data
    });
  }
  return state;
}
