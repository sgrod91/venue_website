const INITIAL_STATE = {
  calendar: null
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'load-calendar') {
    console.log(action.data);
    return Object.assign({}, state, {
      event: action.data
    });
  }
  return state;
}
