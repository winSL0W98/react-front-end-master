import React from 'react';

import './style.scss';

// const PlusButton = () =>  (
//     <button onClick={this.props.onClick} className="btn-class">+</button>
// );

class PlusButton extends React.Component{

    handleClick = () => {
        this.props.onClick();
    };

    render(){
        return <button onClick={this.handleClick} className='btn-class'>+</button>
    }
}


export default PlusButton;
