import React from 'react';
import './CommButton.css';

const CommButton = ({text, type}) => {
    let btnStyle
    if(type === "gray") {
        btnStyle = {
            color: 'black',
            background: 'lightgray'
        }
    } else {
        btnStyle = {
            color: 'white',
            background: 'black'
        }
    }
    return (
        <div>
            <button style={btnStyle} className="commButton">{text}</button>
        </div>
    );
};

export default CommButton;