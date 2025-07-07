import { Component } from "react";
import './index.css'

class Counter extends Component{
    state = { count: 0 }
    onIncrement = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }
    onDecrement = () => {
        this.setState((prevState) => ({count: prevState.count - 1}))
    }
    onReset = () => {
        this.setState((prevState) => ({count: prevState.count = 0}))
    }
    render() {
        const { count }  = this.state
        return(
            <div className="container">
                <div className="counter-container">
                    <h1 className="heading">Counter</h1>
                    <p className="display-number">{count}</p>
                    <div className="buttons-container">
                        <button onClick={this.onIncrement} className="button">Increase</button>
                        <button onClick={this.onDecrement} className="button">Decrease</button>
                    </div>
                    <div className="reset-container">
                        <button onClick={this.onReset} className="reset-btn">Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter