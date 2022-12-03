import React, {useState} from 'react';
import MyDate from "./MyDate/MyDate";
import './Logitem.css'
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";

const Logitem = (props) => {


    const [showConfirm,setShowConfirm] = useState(false);

    const deleteItemHandler = () => {
        setShowConfirm(true);
    }

    const cancelHandler = () =>{
        setShowConfirm(false);
    }

    const okHandler = () => {
      props.onDelLog();
    }

    return (
        <Card className="item">

            {showConfirm && <ConfirmModal
                confirmText="该操作不可恢复，确认吗？"
                onCancel={cancelHandler}
                onOk={okHandler}
            />}

            <MyDate date={props.date}/>
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}分钟</div>
            </div>

            <div>
                <div onClick={deleteItemHandler} className='delete'>×</div>
            </div>
        </Card>
    );
};

export default Logitem;