const INITIAL_STATE = {
  event: null
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'load-single-event') {
    console.log(action.data);
    return Object.assign({}, state, {
      event: action.data
    });
  } else if(action.type === 'add-to-cart') {
    return Object.assign({}, state, {

    })
  }
  return state;
}
