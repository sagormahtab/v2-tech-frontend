import React from 'react';
import './Tasks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faBell } from '@fortawesome/free-regular-svg-icons';
import 'antd/dist/antd.css';
import { DatePicker, TimePicker, Input } from 'antd';
import SubTask from '../SubTask/SubTask';
import FileUpload from '../FileUpload/FileUpload';
import CommButton from '../CommButton/CommButton';

const Tasks = () => {

    function dateHandler(date, dateString) {
        console.log(date, dateString);
    }
    function timeHandler(time, timeString) {
        console.log(time, timeString);
    }
    return (
        <div className="task-container">
            <h4 className="mt-5 mb-3">Task Name</h4>
            <div className="task-desc d-flex align-items-center">
                <FontAwesomeIcon className="editIcon" icon={faEdit} />
                <p className="ml-3">Lorem Ipsum is simply dummy text of the prinng and typeseng
                industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h4 className="mt-4 mb-3">Date</h4>
                    <DatePicker onChange={dateHandler} size="large" format="ddd, MMMM Do, YYYY" className="w-100 rounded" />
                </div>
                <div className="col-md-4">
                    <h4 className="mt-4 mb-3">Time</h4>
                    <TimePicker use12Hours format="h:mm a" onChange={timeHandler} size="large" className="w-100 rounded" />
                </div>
                <div className="col-md-4">
                    <h4 className="mt-4 mb-3">Reminder</h4>
                    <Input size="large" placeholder="On time" className="w-100 rounded reminderInput" 
                    prefix={<FontAwesomeIcon className="pr-2" style={{fontSize: '25px'}} icon={faBell} />} />
                </div>
            </div>

            <SubTask />
            <FileUpload />

            <div className="row mt-3">
                <div className="col-md-6">
                    <CommButton text="Cancel" type="gray" />
                </div>
                <div className="col-md-6">
                    <CommButton text="Update" type="black" />
                </div>
            </div>
        </div>
    );
};

export default Tasks;