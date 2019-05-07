import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { withRouter } from "react-router-dom";
import TextFieldGroup from '../TextFieldGroup/index.jsx';
import validateInput from '../../utils/validator';

import './style.scss';
import HeaderTask from "../../layouts/Home";
import AuthType from "../AuthType";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                username: "",
                password: ""
            },
            errors: {},
            isLoading: false
        };
    }

    isValid = () => {
        const { errors, isValid } = validateInput(this.state.data);

        if (!isValid)
            this.setState({ errors });

        return isValid;
    };

    onChange = (event) => {
        this.setState({
            data: {...this.state.data,
            [event.target.name]:event.target.value }
        });

    };

    onSubmit = (event) => {
        event.preventDefault();
        if (this.isValid()) {
            this.setState( { errors: {}, isLoading: true});
            this.props.login(this.state.data).then(
                (res) => {
                    this.setState({
                        isLoading: false,
                    });
                    this.props.history.push('/posts');
                },
                (err) => {
                    this.setState({
                    errors: {
                        login: "Invalid credentials"
                    },
                    isLoading: false });
                }
            );
        }
    };

    render() {
        const {data, errors} = this.state;

        return (

            <div className = "Form">
                <div className = "Form-header">
                    авторизация
                </div>

                <div className = "Form-group">
                    <form onSubmit = {this.onSubmit}>
                        <TextFieldGroup
                            name = "username"
                            type = "text"
                            label = "логин"
                            placeholder = "Логин"
                            value = {data.username}
                            error = {errors.username}
                            onChange = {this.onChange}
                    />

                        <TextFieldGroup
                            name = "password"
                            type = "password"
                            label = "пароль"
                            placeholder = "Пароль"
                            value = {data.password}
                            error = {errors.password}
                            onChange = {this.onChange}
                        />

                        <div
                            className = "Form-group">
                            {errors.login && <span className = "Form-group-error">
                                {errors.login}
                            </span>}

                            <button
                                type = "submit"
                                className = "Form-group-button">
                                    вход
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
};

export default withRouter(connect(null, {login})(LoginForm));
