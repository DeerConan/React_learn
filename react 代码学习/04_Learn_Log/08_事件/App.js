import React from 'react';

const App = () => {

    const clickHandler = (event) =>{
        event.preventDefault() // 取消默认行为
        event.stopPropagation() // 取消事件的冒泡
        alert('我是App中的clickHandler!');
    };

    return (
        <div style={{width:200,height:200,margin:'100px auto',backgroundColor:'#bfc'}}
             onClick={()=>{alert('我是div') }}>
            <button onClick={()=>{alert('123')}}>点我一下</button>
            <button onClick={clickHandler}>哈哈</button>
            <a href="https://www.baidu.com" onClick={clickHandler}>超链接</a>
        </div>
    );
};

export default App;