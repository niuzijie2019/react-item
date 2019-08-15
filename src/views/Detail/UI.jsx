
import React, { Component } from 'react';
// import UI from './UI';
// import action from './action';
// import { connect } from 'react-redux';
// import axios from 'axios';
import './detail.scss';
import store from '@/views/Detail/store'

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      img: '',
      title: '',
      id: ''
    }
  }

  componentDidMount () {

    this.props.detailPage()
    console.log(this.props);


    
  }
  add() {
    console.log(this.props.match.params.id)
    const id = this.props.match.params.id
    store.dispatch({
      type:'DETAIL_ID',
      data:id
    })
    console.log(store.getState().id,99999999999)
    // setTimeout(()=>{
    //   console.log(store.getState().id)
    // },1000)

  }

  render () {
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