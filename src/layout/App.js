import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Home from '@/views/Home';
import Kind from '@/views/Kind';
import Kind1 from '@/views/Kind/index1.jsx';
import Kind2 from '@/views/Kind/index2.jsx';
import Kind3 from '@/views/Kind/index3.jsx';
import Kind4 from '@/views/Kind/index4.jsx';
import Kind5 from '@/views/Kind/index5.jsx';
import Cart from '@/views/Cart';
import User from '@/views/User';
import Release from '@/views/Release';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path = '/home' component = { Home }/>
        <Route path = '/kind1' component = { Kind1 }/>
        <Route path = '/kind2' component = { Kind2 }/>
        <Route path = '/kind3' component = { Kind3 }/>
        <Route path = '/kind4' component = { Kind4 }/>
        <Route path = '/kind5' component = { Kind5 }/>
        <Route path = '/kind' component = { Kind }/>
        <Route path = '/cart' component = { Cart }/>
        <Route path = '/user' component = { User }/>
        <Route path = '/release' component = { Release }/>
        <Redirect to = '/home' />
      </Switch>
      <footer className = "footer">
      <ul>
        <NavLink to="/home">
          <span className = "iconfont icon-shouye"></span>
          <p>首页</p>
        </NavLink>
        <NavLink to="/kind">
          <span className = "iconfont icon-tubiao113"></span>
          <p>分类</p>
        </NavLink>
        <NavLink to="/release">
          <span className = "iconfont icon-fabu"></span>
          <p>发布</p>
       </NavLink>
        <NavLink to="/cart">
          <span className = "iconfont icon-gouwuche"></span>
          <p>购物车</p>
       </NavLink>
        <NavLink to="/user">
          <span className = "iconfont icon-weibiaoti2fuzhi12"></span>
          <p>我的</p>
        </NavLink>
      </ul>
    </footer>
    </div>
  );
}

export default App;
