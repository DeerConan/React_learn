import React from 'react';
import './Logs.css'
import Logitem from "./Logitem/Logitem";
import Card from "../UI/Card/Card";

const Logs = (props) => {

    let filterData = props.logsData.filter(item => item.date.getFullYear() === 2021);

   let logItemData = filterData.map(item => <Logitem
       key={item.id} date={item.date} desc={item.desc} time={item.time}
       onDelLog={()=>props.onDelLog(item.id)}/>)
   // const logItemData = logsData.map(item => <Logitem key={item.id} {...item}/>)

    if (logItemData.length === 0){
        logItemData = <p className={'no-logs'}>没有找到日志！</p>;
    }

    return (
        <Card className="logs">
            {
                // logItemData.length !== 0 ? logItemData : <p className={'no-logs'}>没有找到日志！</p>
            }
            {
                logItemData
            }
        </Card>
    );
};

export default Logs;