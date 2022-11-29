import React from 'react';
import MyDate from "./MyDate/MyDate";
import './Logitem.css'

const Logitem = () => {
    return (
        <div className="item">
            <MyDate/>
            <div className="content">
                <h2 className="desc">学习React</h2>
                <div className="time">40分钟</div>
            </div>
        </div>
    );
};

export default Logitem;