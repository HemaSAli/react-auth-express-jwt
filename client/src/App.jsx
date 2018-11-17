import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Private from './components/PrivateRoutes';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Private path="/" component={Welcome} />
        </Switch>
      </Router>
    );
  }
}

export default App;
