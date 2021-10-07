import React, { Component } from 'react'
import Product from './Product'

export default class ShopData extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    handleCount = (countOfProduct) =>{
        this.setState({count: this.state.count + countOfProduct})
    }
    
    render() {
        return (
            <div>
                <i class="fa fa-shopping-cart" style={{fontSize: "48px",marginRight: "10px", color:"red", float: "left"}}></i><h1>{this.state.count}</h1>
                <div className="col-md-12">
                    {
                        this.props.products.map((product, index) => <Product key={index} product={product} parentCallback = {this.handleCount} />)
                    }
                </div>
            </div>
        )
    }
}
