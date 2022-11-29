import React from 'react';
import MyDate from "./MyDate/MyDate";
import './Logitem.css'

const Logitem = (props) => {
    return (
        <div className="item">
            <MyDate date={props.date}/>
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}分钟</div>
            </div>
        </div>
    );
};

export default Logitem;