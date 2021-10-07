import React, { Component } from 'react'
import 'C:/ReactTrg/myproject/src/Styles/Product.css'

export default class Product extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             modelShow : false,
             addToCart : false
        }
    }
    
    showHandler =() =>{
        this.setState({
            modelShow : true
        })
    }

    hideHandler=() =>{
        this.setState({
            modelShow : false
        })
    }

    addToCart =() =>{
        this.setState({
            addToCart : true
        })
        this.props.parentCallback(1);
    }

    removeFromCart=() =>{
        this.setState({
            addToCart : false
        })
        this.props.parentCallback(-1);
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="row">
                {
                    !this.state.modelShow ?

                    <div className="card">
                        <img className="card-img-actions" src={this.props.product.image} className="card-img img-fluid" style={{marginTop: "10px", marginLeft:"35px"}} alt=""/>
                        <div className="card-body d-flex flex-column">
                            <h4 className="card-title">{this.props.product.title}</h4>
                            <h6 className="card-text" style={{fontSize: "20px", fontWeight: "bolder"}}>{this.props.product.price} $</h6>
                            <button type="button" onClick={this.showHandler} className="btn bg-cart mt-auto" style={{fontWeight: "bold"}}>See Description</button>
                            <br></br>
                            <br></br>
                            {
                                !this.state.addToCart ?
                                <button type="button" onClick={this.addToCart} className="btn bg-cart mt-auto" style={{fontWeight: "bold"}}> Add To Cart</button>
                                :
                                <button type="button" onClick={this.removeFromCart} className="btn btn-danger mt-auto" style={{fontWeight: "bold"}}> Remove From Cart</button>
                            }
                        </div> 
                    </div>

                    :

                    <div className="card">
                        <div className="card-body d-flex flex-column">
                            <p className="card-text" style={{fontSize: "15px"}}>{this.props.product.description}</p>
                            <p style={{fontSize: "20px", fontWeight: "bold",fontFamily: "Arial"}}>Category : </p><p className="card-text" style={{fontSize: "15px", fontWeight: "bold"}}>{this.props.product.category}</p>
                            <h5 className="card-text" style={{fontSize: "20px", fontWeight: "bolder"}}>{this.props.product.price} $</h5>
                            <button type="button" onClick={this.hideHandler} className="btn btn-primary mt-auto" style={{fontWeight: "bold"}}> Hide Description</button>
                        </div>
                    </div>
                }
            </div>
            </div>
        )
    }
}
