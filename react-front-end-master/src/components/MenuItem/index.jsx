import React from 'react';
import PlusButton from '../PlusButton/index.jsx';
import PropTypes from 'prop-types';

import './style.scss';

const MenuItem = ({ name, title, icon, button, func }) => (
    <li className="menu--item">
        <a onClick={func} className="menu--item__link" href="#">
            <img src={icon} alt={name} />
            {title}
        </a>
        {button && (<div className="menu--item__button"><PlusButton onClick={func}/></div>)}
    </li>
);

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    button: PropTypes.bool.isRequired
};

export default MenuItem;