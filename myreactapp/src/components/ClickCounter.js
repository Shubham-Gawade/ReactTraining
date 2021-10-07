import React, { Component } from 'react'
import { CounterHOC } from './CounterHOC'

class ClickCounter extends Component {
    //Same Part From Hover And Click Counter moved to HOC

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          counter: 0
    //     }
    // }

    // increamentCounter = () =>{
    //     this.setState(prevState => {
    //         return {counter : prevState.counter+1}
    //     })
    // }
    
    render() {
        const {counter,increamentCounter} = this.props
        return (
            <div>
                <button onClick={increamentCounter}>This button is clicked {counter} times</button>
            </div>
        )
    }
}

export default CounterHOC(ClickCounter)