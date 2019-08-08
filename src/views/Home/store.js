export default (state = {
  bannerlist: []
}, { type, data }) => {
  switch (type) {
    case 'CHANGE_BANNER_LIST':
      return Object.assign({}, state, { bannerlist: data })
    default:
      return state;  
  }
}