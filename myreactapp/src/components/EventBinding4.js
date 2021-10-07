import React, { Component } from 'react'

export default class EventBinding4 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             uname:"John"
        }
    }
    
    clickHandler = () => {
        this.setState({
            uname:"Smith"
        })
    }
    render() {
        return (
            <div>
                Uname : {this.state.uname}
                <br/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
