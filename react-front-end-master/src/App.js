import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

import Login from './layouts/Login/index.jsx';
import Home from './layouts/Home/index.jsx';
import AuthType from "./components/AuthType";
import {reducer} from "./reducers/typeReducer";

class App extends Component {

  render() {
        const { isAuthenticated, idButtonType } = this.props;

        // let isAuthenticated = true;

        return isAuthenticated ?
        (
              <Switch>
                  <Route path = "/login" component = {Login} />
                  <Route path = "/" component = {AuthType} />
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
        isAuthenticated : state.authReducer.isAuthenticated,
        // idButtonType: state.reducer.idButtonType,
    }
};

export default connect(mapStateToProps)(App);
