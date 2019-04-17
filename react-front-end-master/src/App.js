import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

import Login from './layouts/Login/index.jsx';
import Home from './layouts/Home/index.jsx';

class App extends Component {
  render() {
        // const { isAuthenticated } = this.props;
        let isAuthenticated = true;

        return isAuthenticated ?
        (
              <Switch>
                  <Route path = "/login" component = {Login} />
                  <Route path = "/" component = {Home} />
              </Switch>
        )
        : (
            <Switch>
                <Route path = "/login" component = {Login} />
                <Redirect to = "/login" />
            </Switch>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.authReducer.isAuthenticated
    }
};

export default connect(mapStateToProps)(App);
