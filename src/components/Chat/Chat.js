import React from 'react';
import './Chat.css';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

const Chat = () => {
    return (
        <div>
            <InputGroup className="mb-3 chat-box" style={{width: '93%'}}>
                <FormControl className="searchField chatField rounded-pill"
                placeholder="Write your message..."
                aria-label="Search"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <a href="/"><FontAwesomeIcon className="paperClipIcon" icon={faPaperclip} /></a>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default Chat;