import React from 'react';
import './Main.css';
import Friends from '../Friends/Friends';
import Tasks from '../Tasks/Tasks';
import Chat from '../Chat/Chat';

const Main = () => {
    return (
            <div className="row no-mr">
            <div className="col-md-3">
                <Friends />
            </div>
            <div className="col-md-6">
                <Tasks />
            </div>
            <div className="col-md-3 chat-wrp" style={{borderLeft: '1px solid lightgray'}}>
                <Chat />
            </div>
        </div>
    );
};

export default Main;