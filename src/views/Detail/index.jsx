
import React, { Component } from 'react';
// import UI from './UI';
// import action from './action';
// import { connect } from 'react-redux';
import axios from 'axios';
import './detail.scss';
import store from '@/views/Detail/store'

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      img: '',
      title: '',
      id: '',
      flag:false
    }
  }

  componentDidMount () {

    // this.props.detailPage()
    console.log(this.props);
    const { props: { match: { params: { id } } } } = this 
      axios.get('/api/goods/find?id=' + id ).then(res => {
        console.log(res.data.data[0])
        const data = res.data.data[0]
        this.setState({
          img: data.image_url,
          title: data.name,
          id: data.id
        })
      })

    
  }
 
  add() {
    console.log(store)
    let old = store.getState().pro
    console.log(old)
    // let old = []
    let id = this.props.match.params.id*1;
    let n1 =0;

   for(var i=0;i<old.length;i++){
     if(old[i].id === id){
       old[i].num++
       n1 = 1
     }
   }
   if(n1===0){
    old.push({id:id,num:1})
   }

    store.dispatch({
      type:'DETAIL_ID',
      data:old
    })
    console.log(store.getState().pro,5555555)
  }

  render () {
    // console.log(store,7777777)
    return (
      <div className = "container">
        {
            <div className="box">
              <div className = "back">
                <i className = "iconfont icon-fanhui" onClick = { () => {
                  this.props.history.goBack();
                  console.log('返回');
                } }/>
              </div>

              <div className="detail_content">
                <div className = "detailimg">
                  <img src= { this.state.img } alt=""/>
                </div>
                <div className = "price">
                  <span>￥{ this.state.id }</span>
                  <span>市场价：￥{ this.state.id }</span>
                  <span>6折</span>
                </div>
              </div>
            </div>
            
        }

        { store.getState().id }
        {
            <div className="footer">
              <div className="carts">
                <li>
                  <i className = "iconfont icon-gouwuche"></i>
                  <p>客服</p>
                </li>
                <li>
                  <i className = "iconfont icon-gouwuche"></i>
                  <p>店铺</p>
                </li>
                <li>
                  <i className = "iconfont icon-gouwuche"></i>
                  <p>购物车</p>
                </li>
              </div>
        
              <div className="addCart">
                <li onClick = { this.add.bind(this) }>
                  加入购物车
                </li>
                <li>
                  立即购买
                </li>
              </div>
            </div>
        }
      </div>
    )
  }
}



// import { connect } from 'react-redux'
// import UI from './UI'
// import axios from 'axios'

// export default connect((state) => {
//   console.log(state)
//   return {
//     detailye: state.detail.detailye
//   }
// }, (dispatch) => {
//   return {
//     detailPage () {
//       const { props: { match: { params: { id } } } } = this 
//       axios.get('https://www.daxunxun.com/detail?id=' + id ).then(res => {
//         // console.log(res.data)
//         const data = res.data[0]
//         this.setState({
//           img: data.images.small,
//           title: data.title,
//           id: data.id
//         })
//       })
//     }
//   }
// })(UI);