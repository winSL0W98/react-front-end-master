import React from 'react';

import './style.scss';
import HomePage from "../../layouts/Home";

class AuthType extends React.Component {
    render() {
        return (
            <div className="auth-type">
                <div className="auth-type__buttons">
                    <button className="auth-type__button">
                        Исполнитель
                    </button>

                    <button className="auth-type__button">
                        Менеджер
                    </button>

                    <button className="auth-type__button">
                        Руководитель
                    </button>
                </div>
            </div>
        );
    }
}

export default AuthType;
