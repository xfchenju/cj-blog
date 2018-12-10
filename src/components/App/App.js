import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import NoMatch from '../NoMatch';
import Articles from '../Articles/Articles'
import ArticleDetail from '../Articles/ArticleDetail'
import About from '../About/About'
import TodoList from '../TodoList'
import './App.css';
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    const Nav = (
      <nav className="nav">
        <h2 className="nav__title">CJ的博客</h2>
        <ul className="nav__itemWrap">
          <li className="nav__item">
            <Link to={'/articles'}><Icon type="home" />&nbsp;首页</Link>
          </li>
          <li className="nav__item">
            <Link to={'/categories'}><Icon type="appstore" />&nbsp;分类</Link>
          </li>
          <li className="nav__item">
            <Link to={'/articles'}><Icon type="folder" />&nbsp;归档</Link>
          </li>
          <li className="nav__item">
            <Link to={'/tags'}><Icon type="tags" theme="filled" />&nbsp;标签</Link>
          </li>
          <li className="nav__item">
            <Link to={'/about'}><Icon type="user" />&nbsp;关于</Link>
          </li>
          <li className="nav__item">
            <Link to={'/todo'}><Icon type="user" />&nbsp;todo</Link>
          </li>
        </ul>
      </nav>
    )
    return (
      <Router>
        <Layout>
          <Header style={{ color: '#fff' }}>
            {Nav}
          </Header>
          <Content style={{ background: '#fff', minHeight: 'calc(100vh - 133px)'}}>
              <Switch>
                <Route exact path="/" component={Articles}></Route>
                <Route path="/articles" component={Articles}></Route>
                <Route path="/articles/detail/:id" component={ArticleDetail}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/todo" component={TodoList}></Route>
                <Route component={NoMatch}></Route>
              </Switch>
          </Content>
          <Footer className="footer">底部</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
