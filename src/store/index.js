import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import home from '@/views/Home/store';
import detail from '@/views/Detail/store';

const reducer = combineReducers({
  home,
  detail
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
