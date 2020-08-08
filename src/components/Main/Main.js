import React from 'react';
import './Main.css';
import Friends from '../Friends/Friends';

const Main = () => {
    return (
            <div className="row no-mr">
            <div className="col-md-3">
                <Friends />
            </div>
            <div className="col-md-6">

            </div>
            <div className="col-md-3">

            </div>
        </div>
    );
};

export default Main;