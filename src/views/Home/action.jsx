import axios from 'axios';

export default {
  getBannerlist (dispatch) {
    axios.get('https://www.daxunxun.com/banner').then(res => {
      // console.log(res.data);
      dispatch({
        type: 'CHANGE_BANNER_LIST',
        data: res.data
      })
    })
  }
}