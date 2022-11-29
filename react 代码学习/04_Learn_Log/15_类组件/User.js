import React, {Component} from 'react';

class User extends Component {

    state = {
        count:0,
        text:"哈哈",
        odj:{
            name:'沙和尚',
            age:18
        }
    }

    divRef = React.createRef()

    clickHandler = () =>{
        this.setState(prevState=>{
            return {
                count: prevState.count+1,
                odj:{...prevState.odj,name:'孙悟空'}
            }
        })
        // this.setState({count:this.state.count+1})
    }

    render() {
        return (
            <div ref={this.divRef}>
                <h1>{this.state.count}--{this.state.text}</h1>
                <h1>{this.state.odj.name}--{this.state.odj.age}</h1>
                <button onClick={this.clickHandler}>点</button>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.gender}</li>
                </ul>
            </div>

        );
    }
}

export default User;