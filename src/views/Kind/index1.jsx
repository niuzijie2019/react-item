import { connect } from 'react-redux';
import action from './action';
import UI from './UI1';

export default connect((state) => {
  console.log(state)
  return {
    List: state.kind.List,
    Shop: state.kind.Shop
  }
}, (dispatch) => {
  return {
    getList () {
      dispatch(action.getList)
    },
    getShop () {
      dispatch(action.getShop)
    }
  }
})(UI);