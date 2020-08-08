import React, { useState, useEffect } from 'react';
import './SubTask.css';
import { Progress } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';
import { Modal, Form, Button } from 'react-bootstrap';

const SubTask = () => {
    const [show, setShow] = useState(false);
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [progCount, setProgCount] = useState(0);
    const [progress, setProgress] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleInput = (e) => {
        setTask(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        if(!task) {
            alert("Type a Todo!");
            return;
        }
        setTasks([
            ...tasks,
            task
        ])
        setTask("");
        setShow(false);
    }

    const deleteTask = (task) => {
        const filteredTasks= tasks.filter(tsk =>
            tsk!==task);
        setTasks(filteredTasks);
    }

    const handleCheckBox = (e) => {
        if(e.target.checked) {
            setProgCount(progCount + 1);
        } else {
            setProgCount(progCount - 1);
        }
    }

    useEffect(()=>{
        let newProgress = parseInt((progCount / tasks.length) * 100);
        setProgress(newProgress);
    },[progCount, tasks.length, progress])

    return (
        <div className="mt-5">
            <Progress strokeColor="black" percent={progress} showInfo={false} />
            <p className="text-center">{Number.isNaN(progress)? "0": progress}% Complete</p>

            {
                tasks.map((task, i) => <div className="d-flex justify-content-between align-items-center" key={i}>
                    <div className="check-container">
                        <div class="checkbox">
                            <input type="checkbox" id={`checkbox${i}`} name="" value="" onChange={handleCheckBox} />
                            <label for={`checkbox${i}`}><span className="taskLabel">{task}</span></label>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faTimes} className="mt-3 timesIcon" style={{fontSize: '20px', color: 'lightgray'}} onClick={()=>deleteTask(task)} />
                </div>)
            }
            <button className="addSubtaskBtn mt-4"  onClick={handleShow}>
                <FontAwesomeIcon className="mr-2" icon={faPlus} />Add Subtask
            </button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Add Subtask</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={addTask}>
                    <Form.Group>
                        <Form.Control onChange={handleInput} type="text" placeholder="Subtask" />
                    </Form.Group>
                    
                    <Button className="taskSubmitBtn" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>

        </div>
    );
};

export default SubTask;