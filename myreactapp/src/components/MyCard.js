import React, { Component } from 'react'

export default class MyCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "Shubham",
             location : "Baner, Pune"
        }
    }
    
    render() {
        return (
            <div className="card text-center">
            </div>
        )
    }
}
