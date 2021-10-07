import React, { Component } from 'react'

export default class PropsCC extends Component {
    render() {
        const {uname,city}=this.props
        return (
            <diV>
               Hello, {uname} , You stay at {city} and {this.props.children}
            </diV>
        )
    }
}

PropsCC.defaultProps={
    uname:"Guest",
    city:"Delhi"
}