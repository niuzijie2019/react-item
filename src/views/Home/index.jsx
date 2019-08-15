// 容器组件
import { connect } from 'react-redux';
import UI from './UI';
import action from './action';

export default connect((state) => {
  // console.log(state)
  return {
    bannerlist: state.home.bannerlist,
    prolist: state.home.prolist
  }
}, (dispatch) => {
  return {
    getBannerlist () {
      // 触发异步操作
      dispatch(action.getBannerlist)
    },
    getProlist () {
      dispatch(action.getProlist)
    }
  }
})(UI);
