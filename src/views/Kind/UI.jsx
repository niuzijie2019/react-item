import React, { Component } from 'react';
import Kind from '../components/Kind.js';
import './kind.scss';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
export default class extends Component {
  
  componentDidMount () {
    this.props.getList();
    this.props.getShop();
  }
  render () {
    // let { List,Shop } = this.props
    console.log(this.props)
    let list = this.props.List
    // let img =this.state.kind.img
    return (
      <div className="box">
        <header className="header">
          头部
        </header>
        <div className="content">
          <ul className="contentlist">
            <NavLink to="/kind">
              <p>品牌</p>
            </NavLink>
            <NavLink to="/kind1">
              <p>品牌推荐</p>
            </NavLink>
            <NavLink to="/kind2">
              <p>名包</p>
            </NavLink>
            <NavLink to="/kind3">
              <p>名表</p>
            </NavLink>
            <NavLink to="/kind4">
              <p>饰品</p>
            </NavLink>
            <NavLink to="/kind5">
              <p>其他</p>
            </NavLink>
          </ul>
          {/* <div className="con">
              <span>A</span>
              <li><span>logo</span><span>agdsagadsgasdgaga</span></li>
              <li><span>logo</span><span>agdsagadsgasdgaga</span></li>
              <li><span>logo</span><span>agdsagadsgasdgaga</span></li>
          </div> */}
          <div className="shows">
            <div className="imgs"><img src="http://img5.imgtn.bdimg.com/it/u=2227562010,3389156175&fm=26&gp=0.jpg" alt="" /></div>
            <div className="kind">____品牌____</div>
            <Kind List={ list }></Kind>
          </div>
        </div>
      </div>
      
    )
  }
}