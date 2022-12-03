import React from 'react';
import Card from "../Card/Card";
import "./ConfirmModal.css"
const ConfirmModal = (props) => {
    return (
        <Card className="confirmModal">
            <div className="confirmText">
                <p>{props.confirmText}</p>
            </div>
            <div className="confirmButton">
                <button onClick={props.onOk} className="okButton">确认</button>
                <button onClick={props.onCancel}>取消</button>
            </div>
        </Card>
    );
};

export default ConfirmModal;