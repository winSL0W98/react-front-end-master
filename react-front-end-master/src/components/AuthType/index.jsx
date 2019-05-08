import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeType} from "../../actions/typeActions";
import {Link} from 'react-router-dom';

import './style.scss';

class AuthType extends React.Component {
    render() {
        const {changeType} = this.props;
        return (
            <div className="auth-type">
                <div className="auth-type__buttons">
                    <Link to="/head">
                        <button
                            className="auth-type__button"
                            // onClick={() => handleClick('rukovod')}
                            onClick={() => {
                                changeType(1);
                            }}
                        >
                            Исполнитель
                        </button>
                    </Link>

                    <Link to="/head">
                        <button
                            className="auth-type__button"
                            onClick={() => {
                                changeType(2)
                            }}
                        >
                            Менеджер
                        </button>
                    </Link>

                    <Link to="/head">
                        <button
                            className="auth-type__button"
                            onClick={() => {
                                changeType(3)
                            }}
                        >
                            Руководитель
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

const setJobTitleUser = (state) => {
    return {
        idButtonType: state.idButtonType
    }
};

const mapActionsToProps = (dispatch) => {
    return {
        changeType: bindActionCreators(changeType, dispatch)
    }
};

export default connect(setJobTitleUser, mapActionsToProps)(AuthType);

