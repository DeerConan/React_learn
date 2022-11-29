import './App.css'
import {useRef, useState} from "react";

let temp;

const App = () => {

    const h1Ref = new useRef();
    // const h1Ref = {current:null}
    console.log(h1Ref === temp );
    temp = h1Ref;

    const clickHandler = () =>{

    };

    const [count,setCount] = new useState(1);

    const countAddHandler = () =>{
        setCount(prevState => prevState +1);
    }

    return (
        <div className='app'>
            <h1 ref={h1Ref}>我是标题{count}</h1>
            <button onClick={clickHandler}>1</button>
            <button onClick={countAddHandler}>2</button>
        </div>
    );
};

export default App;