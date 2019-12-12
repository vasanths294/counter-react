import React from 'react';
import './App.css';

class Counter extends React.Component {
    state = {
        counter: 0
    };

    dec = () => {
        console.log("decrement", this.state)
        this.setState({
            counter : this.state.counter - 1
        });
    };

    inc = () => {
        console.log("increment", this.state)
        this.setState({
            counter : this.state.counter + 1
        });
    }
render() {
    return (
        <div className="App-header"> 
        hello
        
        <button onClick={ this.dec }> DEC </button>
        { this.state.counter }
        <button onClick={ this.inc }> INC</button>
        </div>
    );
    }
}

export default Counter;
