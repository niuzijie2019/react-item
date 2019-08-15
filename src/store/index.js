import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import home from '@/views/Home/store';
import kind from '@/views/Kind/store';

const reducer = combineReducers({
  home,
  kind
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
 