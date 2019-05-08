import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';
import AuthType from "./components/AuthType";

import './index.scss';

ReactDOM.render(
    <Router>
        <Provider store = {store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root'));

