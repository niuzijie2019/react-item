import axios from 'axios';
export default {
  getList (dispatch) {
    axios.get('/goods/find').then(res => {
      dispatch({
        type:'changeList',
        data:res.data.data
      })
    })
  },
  getShop (dispatch) {
    axios.get('/goods/find').then(res => {
      dispatch({
        type:'changeShop',
        data:res.data.data
      })
    })
  }
}