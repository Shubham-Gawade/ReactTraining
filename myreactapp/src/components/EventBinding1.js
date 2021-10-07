import React, { Component } from 'react'

export default class EventBinding1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             uname:"John"
        }
    }
    
    clickHandler(){
        this.setState({
            uname:"Smith"
        })
    }
    render() {
        return (
            <div>
                Uname : {this.state.uname}
                <br></br>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}
