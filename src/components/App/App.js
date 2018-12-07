import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NoMatch from '../NoMatch';
import Articles from '../Articles/Articles'
const { Header, Content, Footer } = Layout;



class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ color: '#fff' }}>这是头部</Header>
        <Content style={{ background: '#fff' }}>
          <Router>
            <Switch>
              <Route exact path="/" component={Articles}></Route>
              <Route exact path="/articles" component={Articles}></Route>
              <Route component={NoMatch}></Route>
            </Switch>
          </Router>
        </Content>
        <Footer>底部</Footer>
      </Layout>
    );
  }
}

export default App;
