import { createStore } from 'redux';

const reducer = (state = { 
   pro:[]
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'DETAIL_ID':
      return Object.assign({}, state, {pro: data});
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
