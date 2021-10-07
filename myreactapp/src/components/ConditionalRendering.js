import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isUserValid: true,
             userName: "Shubham"
        }
    }
    
    render() {
        
        // if(this.state.isUserValid){
        //     return <div>Welcome {this.state.userName}</div>
        // }else{
        //     return <div>Welcome {this.state.userName}</div>
        // }


        // let response
        // if(this.state.isUserValid){
        //     response='Welcome ' + this.state.userName
        // }
        // else{
        //     response='Invalid User'
        // }
        // return <div>{response}</div>


        // return(
        //     this.state.isUserValid ? 
        //         <div>Welcome {this.state.userName}</div> :
        //         <div>Invalid User</div>
        // )


        //Short Circuit Operator
        return this.state.isUserValid && <div>Welcome {this.state.userName}</div>
    }
}
