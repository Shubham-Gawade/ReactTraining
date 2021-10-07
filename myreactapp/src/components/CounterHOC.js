import React, { Component } from 'react'

export const CounterHOC = (WrappedComponent) => {
    class NewComponent extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 counter: 0
            }
        }
    
        increamentCounter = () =>{
            this.setState(prevState => {
                return {counter : prevState.counter+1}
            })
        }

        render() {
            return (
                <WrappedComponent
                    counter= {this.state.counter}
                    increamentCounter={this.increamentCounter}
                />
                //This component is return to CounterHOC
            )
        }
    }
    return NewComponent
}

//HOC receives the wrappedcomponent make modification to it and newcomponent return back