import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App/App';
import NoMatch from '../components/NoMatch';

class Routes extends Component {
  render() {
    return (
      <Router className="Routes">
        <Switch>
          <Route path="/" component={App}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
