import React from 'react';
import Logitem from "./Logitem/Logitem";
import './Logs.css'

const Logs = () => {
    return (
        <div className="logs">
            <Logitem data={new Date()} desc={"学习前端"} time={"50"}/>
        </div>
    );
};

export default Logs;