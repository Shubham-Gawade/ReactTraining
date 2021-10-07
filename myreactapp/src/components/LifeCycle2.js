import React, { Component } from 'react'

export default class LifeCycle2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "John"
        }
        console.log("Constrctor of LifeCycle2 invoked")
    }

    clickHandler = () => {
        this.setState({
            name: "Smith"
        })
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps of LifeCycle2 invoked")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount of LifeCycle2 invoked")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate of LifeCycle2 invoked")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate of LifeCycle2 invoked")
        return null
    }

    componentDidUpdate(){
        console.log("componentDidUpdate of LifeCycle2 invoked")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount of LifeCycle2 invoked")
    }

    render() {
        console.log("render of LifeCycle2 invoked")
        return (
            <div>
                <h3>Render Of LifeCycle2</h3>
            </div>
        )
    }
}
