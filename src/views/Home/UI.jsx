import React, { Component } from 'react';
import './home.scss';
import { Carousel } from 'antd-mobile';
import Prolist from '@/components/Prolist';
 
export default class extends Component {

  componentDidMount () {
    this.props.getBannerlist();
    this.props.getProlist();
  }

  render () {
    // console.log(this.props)
    const { bannerlist, prolist } = this.props;
    // console.log(prolist)
    return (
      <div className="box">
        <header className="header">
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
                <img src={item.url}
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
          <div className = "recommend">
            <li>今日推荐</li>
            <li>简陋专区</li>
          </div>
          <div className = "like">
            <div className = "youlike">
              <div className = "left"></div>
              <span>猜你喜欢</span>
              <div className = "right"></div>
            </div>
            <div className = "goods">
              <Prolist prolist = { prolist } />
            </div>
          </div>
        </div>
      </div> 
    )
  }
}