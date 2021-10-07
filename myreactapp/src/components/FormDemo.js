import React, { Component } from 'react'

export default class FormDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             address : '',
             technoloy : 'reactjs'
        }
    }

    usernameChange = event => {
        this.setState({
            username : event.target.value
        })
    }

    addressChange = event => {
        this.setState({
            address : event.target.value
        })
    }

    technologySelect = event => {
        this.setState({
            technoloy : event.target.value
        })
    }
    
    onFormSubmit = event => {
        const data = {
            username : this.state.username,
            address : this.state.address,
            technoloy : this.state.technoloy
        }
        alert(data.username+" "+data.address+" "+data.technoloy)
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        Name : <input type="text" name="username"  placeholder="Enter Username" 
                        value={this.state.username} onChange={this.usernameChange}/>
                    </div>
                    <div>
                        Address : <textarea  name="address"  placeholder="Enter Address"
                        value={this.state.address} onChange={this.addressChange}></textarea>
                    </div>
                    <div>
                        Technologies : 
                        <select value={this.state.technoloy} onChange={this.technologySelect}>
                            <option value="reactjs">React JS</option>
                            <option value="angular">Angular</option>
                            <option value="node">Node</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="button" onClick={this.onFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}