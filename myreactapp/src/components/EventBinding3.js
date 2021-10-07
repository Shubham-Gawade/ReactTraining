import React, { Component } from 'react'

export default class EventBinding3 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             uname:"John"
        }
        this.clickHandler=this.clickHandler.bind(this)
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
                <button onClick={()=>this.clickHandler()}>Click</button>
            </div>
        )
    }
}
