import React, { Component } from 'react';
import './home.scss';
import { Carousel } from 'antd-mobile';
 
export default class extends Component {
  componentDidMount () {
    // console.log(this.props)
    this.props.getBannerlist();
  }

  render () {
    // console.log(this.props)
    const { bannerlist } = this.props;
    return (
      <div className="box">
        <header className="header">
          <i></i>
          <input type="text" placeholder="请输入您想要的商品" />
          <span>消息</span>
        </header>
        <div className="content">
          <Carousel
            autoplay={ true }
            infinite
            >
            { bannerlist.map((item, index) => (
              <a
                key={index}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: '200px' }}>
                <img src={`https://www.daxunxun.com${item}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }} />
              </a>
            ))}
          </Carousel>
          <div className = "nav">
            <li>鉴定</li>
            <li>养护</li>
            <li>求购</li>
            <li>商城</li>
          </div>
          <div className = "tj">
            <li>今日推荐</li>
            <li>简陋专区</li>
          </div>
          <div className = "like">
            <div className = "youlike">
              <span>猜你喜欢</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}