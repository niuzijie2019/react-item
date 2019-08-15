import React, { Component } from 'react';
import store from '@/views/Detail/store';
import axios from 'axios';
import './cart.scss';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartShop: [],
      shopNum: []
    }
  }

  componentDidMount () {
    // console.log(store.getState().pro)
    let addCart = store.getState().pro
    let arr = []

    console.log(arr)
    for(let i = 0; i < addCart.length; i++) {
      axios.get('/api/goods/find?id=' + addCart[i].id).then(res => {
        console.log(res.data)
        arr.push(res.data)
        this.setState({
          cartShop: arr
        })
      })
    }
    let numarr = [];
    addCart.map(item => {
      numarr.push(item.num)
      this.setState({
        shopNum: numarr
      })
    })

    // for(let j = 0; j < addCart.length; j++) {
    //   let num += addCart[j].num
    //   this.setState({
    //     shopNum: num
    //   })
    // }
  }

  render () {
    console.log(this.state.cartShop)
    console.log(this.state.shopNum)
    return (
      <div className="box">
        <header className="header">
          <i className = "iconfont icon-fanhui" onClick={ () => {
            this.props.history.goBack();
          } }/>
          <i>购物车</i>
          <i></i>
        </header>
        <div className="content">
          {
            this.state.cartShop.map(item => (
              <li className="cart" key = { item.data[0].id }>
                <div className="cartimg">
                  <img src={ item.data[0].image_url } alt=""/>
                </div>
                <div className="shopDetail">
                  <span className="shopname">
                    {item.data[0].name}
                  </span>
                  <div className="price">
                    <span>￥{item.data[0].normal_price}</span>
                    <div className="num">
                      <button>-</button>
                      {
                        this.state.shopNum.map((item, index) => (
                          <span key={ index }>
                            { item }
                          </span>
                        ))
                      }
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
          {
            <div className="indent">
              <div className="totalPrice">
                <span>总计：{ this.state.shopNum } </span>
                <span></span>
              </div>
              <div className="submitOrder">
                提交订单
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}


