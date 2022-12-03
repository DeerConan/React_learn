import React from 'react';
import Card from "../UI/Card/Card";
import './LogsForm.css'

const LogsForm = () => {
    return (
        <Card className="logs-from">
            <form>
                <div className="form-item">
                    <label htmlFor="">日期</label>
                    <input id="date" type="date"/>
                </div>
                <div className="form-item">
                    <label htmlFor="">内容</label>
                    <input id="desc" type="text"/>
                </div>
                <div className="form-item">
                    <label htmlFor="time">日期</label>
                    <input id="time" type="number"/>
                </div>
            </form>
            <div className="form-btn">
                <button>添加</button>
            </div>
        </Card>
    );
};

export default LogsForm;