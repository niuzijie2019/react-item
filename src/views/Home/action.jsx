import axios from 'axios';

export default {
  getBannerlist (dispatch) {
    axios.get('/api/banner/find?start=4').then(res => {
      
      // console.log(res.data.data);
      dispatch({
        type: 'CHANGE_BANNER_LIST',
        data: res.data.data
      })
    })
  },
  getProlist (dispatch) {
    axios.get('/api/goods/find').then(res => {
      // console.log(res.data.data);
      dispatch({
        type: 'CHANGE_PRO_LIST',
        data: res.data.data
      })
    })
  }
}