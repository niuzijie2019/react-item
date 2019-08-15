const reducer = (state = {
  List:[1,2,3],
  Shop:[3,4,5,6],
  img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=180868167,273146879&fm=26&gp=0.jpg'
},action) => {
  const {type, data} = action;
  switch (type) {
    case 'changeList':
      return Object.assign({}, state, { List: data });
    case 'changeShop':
      return Object.assign({}, state, { Shop: data });
    default:
      return state;
  }
}
export default reducer;