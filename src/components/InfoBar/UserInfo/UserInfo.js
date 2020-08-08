import React from 'react';
import './UserInfo.css';
import onlineIcon from '../../../images/onlineIcon.png';

const UserInfo = ({UserImage}) => {
    return (
        <div className="userInfo topBottomPadding d-flex align-items-center" style={{borderRight: '1px solid white'}}>
            <div>
                <img className="rounded-circle img-fluid user-img" src={UserImage} alt="User"/>
                <img className="onlineIcon" src={onlineIcon} alt="online Icon"/>
            </div>
            <div>
                <h4 className="userName">Raiyad Raad</h4>
                <p className="userStatus">Status will be here</p>
            </div>
        </div>
    );
};

export default UserInfo;