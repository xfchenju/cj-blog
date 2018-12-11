import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App/App';
import NoMatch from '../components/NoMatch';
import ScrollToTop from '../components/App/ScrollToTop';

class Routes extends Component {
  render() {
    return (
      <Router className="Routes">
        <ScrollToTop>
          <Switch>
            <Route path="/" component={App}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Routes;
