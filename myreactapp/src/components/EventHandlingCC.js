import React, { Component } from 'react'

export default class EventHandlingCC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname:"John"
        }
    }
    
    clickHandler(){
        alert("Button is Clicked Class Component")
        //It gives error because we cannot change state 
        //We require event binding
        this.setState({
            uname:"Smith"
        })
    }
    render() {
        return (
            <div>
                Uname : {this.state.uname}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
