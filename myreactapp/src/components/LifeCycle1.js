import React, { Component } from 'react'
import LifeCycle2 from './LifeCycle2'

export default class LifeCycle1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "John"
        }
        console.log("Constrctor of LifeCycle1 invoked")
    }

    clickHandler = () => {
        this.setState({
            name: "Smith"
        })
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps of LifeCycle1 invoked")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount of LifeCycle1 invoked")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate of LifeCycle1 invoked")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate of LifeCycle1 invoked")
        return null
    }

    componentDidUpdate(){
        console.log("componentDidUpdate of LifeCycle1 invoked")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount of LifeCycle1 invoked")
    }

    render() {
        console.log("render of LifeCycle1 invoked")
        return (
            <div>
                {this.state.name}
                <h1>Render of LifeCycle1</h1>
                <button onClick={this.clickHandler}>Click</button>
                <LifeCycle2/>
            </div>
        )
    }
}
