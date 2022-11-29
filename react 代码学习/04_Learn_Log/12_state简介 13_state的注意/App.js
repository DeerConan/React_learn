import React, {useState} from 'react';
import './App.css'

const App = () => {

    const [counter,setcounter] = new useState(1);
    const [user,setUser] = new useState({name:'孙悟空',age:18});

    const addHandler = () => {
        setTimeout(()=>{
            setcounter((prevCounter) => prevCounter + 1)
        },1000)
    }
    const updateUserHandler = () => {
        setUser({...user,name:'猪八戒'})
    }

    return (
        <div className='app'>
            <h1>{counter}--{user.name}--{user.age}</h1>
            <button onClick={updateUserHandler}>-</button>
            <button onClick={addHandler}>+</button>
        </div>
    );
};

export default App;