const INITIAL_STATE = {
  year: new Date() .getFullYear(),
  month: new Date() .getMonth(),
  events: []
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'load-calendar') {
    console.log(action.data);
    return Object.assign({}, state, {
      events: action.data
    });
  } else if (action.type === 'previous-month') {
      console.log(action.data);
      return Object.assign({}, state, {
        month: state.month - 1
      });
  } else if (action.type === 'next-month') {
    console.log(action.data);
    return Object.assign({}, state, {
      month: state.month + 1
    });
  }
  return state;
}
