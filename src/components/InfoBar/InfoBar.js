import React from 'react';
import UserImage from '../../images/signed-in-user.jpg';
import './InfoBar.css';
import UserInfo from './UserInfo/UserInfo';
import TaskBar from './TaskBar/TaskBar';

const InfoBar = () => {
    return (
        <div className="infobar-wrapper">
            <div className="row align-items-center overflow-hidden no-mr">
                <div className="col-md-3">
                    <UserInfo UserImage={UserImage}/>
                </div>
                <div className="col-md-6">
                    <TaskBar />
                </div>
                <div className="col-md-3 equalHeight" style={{borderLeft: '1px solid white'}}>
                    <h4 className="task-conversation">Task Conversation</h4>
                </div>
            </div>
        </div>
    );
};

export default InfoBar;