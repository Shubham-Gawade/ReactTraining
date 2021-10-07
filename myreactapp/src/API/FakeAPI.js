import React, { Component } from 'react'

export default class FakeAPI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:null
        }
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users?page=2').then((res)=>{
            res.json().then((result)=>{
                console.log(result)
                this.users=result
            })
        })
    }
    
    render() {
        return (
            <div>
                {this.users}
            </div>
        )
    }
}
