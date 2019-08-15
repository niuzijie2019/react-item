export default (state = {
  bannerlist: [],
  prolist: []
}, { type, data }) => {
  switch (type) {
    case 'CHANGE_BANNER_LIST':
      return Object.assign({}, state, { bannerlist: data });
    case 'CHANGE_PRO_LIST':
      return Object.assign({}, state, { prolist: data });  
    default:
      return state;  
  }
}