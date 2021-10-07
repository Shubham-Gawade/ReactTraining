import React, { Component } from 'react'
import { CounterHOC } from './CounterHOC'

class HoverCounter extends Component {
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
                <h2 onMouseOver={increamentCounter}>This text is howered {counter} times</h2>
            </div>
        )
    }
}

export default CounterHOC(HoverCounter)