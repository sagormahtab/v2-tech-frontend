import React from 'react';
import './SpecificFriends.css';
import Friend from '../../Friend/Friend';

const SpecificFriends = ({friends}) => {
    return (
        <div>
            {
                friends.map((friend)=> <Friend key={friend.id.value} friend={friend} frndLen={friends.length -1} frndIndex={friends.indexOf(friend)} />)
            }
        </div>
    );
};

export default SpecificFriends;