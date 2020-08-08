import React from 'react';
import './Friend.css';

const Friend = ({friend, frndLen, frndIndex}) => {
    const {name, picture} = friend;
    return (
        <div 
        className={`d-flex align-items-center p-left pb-4 pt-4 
        ${frndIndex === frndLen ? "no-border" : "btm-border"}`}
        >
            <div>
                <img className="rounded-circle" src={picture.thumbnail} alt="friend"/>
            </div>
            <div className="ml-3">
                <h5>{`${name.first} ${name.last}`}</h5>
                <p className="message">Hey let's schedule a meeting for next we...</p>
                <p className="muted-clr mt-2">Tue, 17 Sep 2019 <span className="ml-3">11:00 AM</span></p>
            </div>
        </div>
    );
};

export default Friend;