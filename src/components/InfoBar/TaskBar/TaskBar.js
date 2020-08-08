import React from 'react';
import './TaskBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const TaskBar = () => {
    return (
        <div className="taskbar d-flex justify-content-between">
            <h4 className="addTask">Add New Task</h4>
            <div className="d-flex align-items-center">
                <a href="/">
                    to <span className="font-weight-bold">Assigned Person Name</span>
                </a>
                <a href="/"><FontAwesomeIcon className="ellipsisV" icon={faEllipsisV} /></a>
            </div>
        </div>
    );
};

export default TaskBar;