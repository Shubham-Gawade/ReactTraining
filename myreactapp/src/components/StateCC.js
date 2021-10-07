import React, { Component } from 'react'

export default class StateCC extends Component {
    constructor(props){
        super(props)

        this.state={
            username: "Admin",
            password: "Admin@123"
        }
    }
    render() {
        return (
            <div>
                Username : {this.state.username}
                <br/>
                Password : {this.state.password}
            </div>
        )
    }
}
