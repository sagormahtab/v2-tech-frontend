import React, { useEffect, useState } from 'react';
import './Friends.css';
import gridSquare from '../../images/grid-square.png';
import searchIcon from '../../images/search.png';
import inviteFriendIcon from '../../images/invite-friend-icon.png';
import { InputGroup, FormControl } from 'react-bootstrap';
import SpecificFriends from './SpecificFriends/SpecificFriends';
import SubSectionTitle from './SubSectionTitle/SubSectionTitle';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=6')
        .then(res => res.json())
        .then(data => setFriends(data.results));
    }, []);

    return (
        <div style={{borderRight: '1px solid lightgray'}}>
            <div className="row p-left" style={{paddingTop: '2.3rem'}}>
                <div className="col-md-2">
                    <img className="img-fluid gridsquare" src={gridSquare} alt="grid square"/>
                </div>
                <div className="col-md-10">
                <InputGroup className="mb-3" style={{width: '93%'}}>
                    <FormControl className="searchField rounded-border"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <a href="/"><img className="searchIcon  iconSize" src={searchIcon} alt="search"/></a>
                    </InputGroup.Append>
                </InputGroup>
                </div>
            </div>
            <p className="text-capitalize muted-clr text-center sub-sec-border mt-2">Add task</p>
            <div className="invite-friend-wrp p-left">
                <img src={inviteFriendIcon} className="inviteFriendIcon" alt="Invite Friend"/>
                <span>Invite a friend</span>
            </div>
            <SubSectionTitle title="Overdue" />
            <SpecificFriends friends={friends.slice(0, 2)}/>

            <SubSectionTitle title="Today" />
            <SpecificFriends friends={friends.slice(2,4)} />

            <SubSectionTitle title="Later" />
            <SpecificFriends friends={friends.slice(4,5)} />

            <SubSectionTitle title="Complete" />
            <SpecificFriends friends={friends.slice(5,6)} />
        </div>
    );
};

export default Friends;