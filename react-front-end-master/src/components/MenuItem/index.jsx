import React from 'react';
import PlusButton from '../PlusButton/index.jsx';
import PropTypes from 'prop-types';

import './style.scss';

const MenuItem = ({ name, title, icon, button, functitle, funcname }) => (
    <li className="menu--item">
        <a onClick={functitle} className="menu--item__link" href="#">
            <img src={icon} alt={name} />
            {title}
        </a>
        {button && (<div className="menu--item__button"><PlusButton onClick={funcname}/></div>)}
    </li>
);

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    button: PropTypes.bool.isRequired
};

export default MenuItem;