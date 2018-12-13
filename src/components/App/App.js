import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { Route, Switch, Link, Redirect, withRouter } from 'react-router-dom';

import NoMatch from '../NoMatch';
import Articles from '../Articles/Articles'
import ArticleDetail from '../Articles/ArticleDetail';
import Categories from '../Categories/Categories';
import CategoryDetail from '../Categories/CategoryDetail';
import Tags from '../Tags/Tags';
import TagDetail from '../Tags/TagDetail';
import About from '../About/About';
import TodoList from '../TodoList';
import './App.css';
const { Header, Content, Footer } = Layout;

class App extends Component {
  returnToIndex = () => {
    console.log(this.props.history, 'history');
    this.props.history.push('/articles');
  }
  render() {
    const Nav = (
      <nav className="nav">
        <h2 className="nav__title" onClick={this.returnToIndex}>CJ的博客</h2>
        <ul className="nav__itemWrap">
          <li className="nav__item">
            <Link to={'/articles'}><Icon type="home" />&nbsp;首页</Link>
          </li>
          <li className="nav__item">
            <Link to={'/categories'}><Icon type="appstore" />&nbsp;分类</Link>
          </li>
          {/*<li className="nav__item">
            <Link to={'/articles'}><Icon type="folder" />&nbsp;归档</Link>
          </li>*/}
          <li className="nav__item">
            <Link to={'/tags'}><Icon type="tags" theme="filled" />&nbsp;标签</Link>
          </li>
          <li className="nav__item">
            <Link to={'/about'}><Icon type="user" />&nbsp;关于</Link>
          </li>
          {/*<li className="nav__item">
            <Link to={'/todo'}><Icon type="user" />&nbsp;todo</Link>
          </li>*/}
        </ul>
      </nav>
    )
    return (
      <Layout>
        <Header style={{ color: '#fff' }}>
          {Nav}
        </Header>
        <Content style={{ background: '#fff', minHeight: 'calc(100vh - 133px)'}}>
            <Switch>
              <Route exact path="/">
                <Redirect from="/" to="/articles" />
              </Route>
              <Route exact path="/articles" component={Articles}></Route>
              <Route path="/articles/detail/:id" component={ArticleDetail} history={this.props.history}></Route>
              <Route path="/about" component={About}></Route>
              <Route exact path="/categories" component={Categories}></Route>
              <Route path="/categories/:cid" component={CategoryDetail}></Route>
              <Route exact path="/tags" component={Tags}></Route>
              <Route path="/tags/:tid" component={TagDetail}></Route>
              <Route path="/todo" component={TodoList}></Route>
              <Route component={NoMatch}></Route>
            </Switch>
        </Content>
        <Footer className="footer">底部</Footer>
      </Layout>
    );
  }
}

export default withRouter(App);
