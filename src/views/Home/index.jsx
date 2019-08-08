import { connect } from 'react-redux';
import UI from './UI';
import action from './action';

export default connect((state) => {
  // console.log(state)
  return {
    bannerlist: state.home.bannerlist
  }
}, (dispatch) => {
  return {
    getBannerlist () {
      dispatch(action.getBannerlist)
    }
  }
})(UI);
