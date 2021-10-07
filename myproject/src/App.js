import React, { Component } from 'react'
import ShopData from './Components/ShopData'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      store: [],
      searchStore : [],
      loading : true,
      isSearch : false,
      backToHome : false,
      category : `men's clothing`
    }
  }

  componentDidMount = () => {
    fetch('https://fakestoreapi.com/products').then((response) =>{
      response.json().then((result) => {
        this.setState({
          store: result,
          isSearch: false,
          loading : false
        })
      })
    })
  }

  categorySelect = event => {
    this.setState({
      category : event.target.value
    })
  }

  onFormSubmit = () => {
      let value = this.state.category
      let result = [];
      let searchList = this.state.store
      result = searchList.filter((product) => Object.values(product).includes(value))
      if(result.length <= 0){
          alert("No Results Found")
      }else{
          this.setState({
            searchStore : result,
            backToHome : false,
            isSearch : true
          })
      }
  }

  clickHandler = () =>{
    this.setState({
      backToHome : true
    })
  }

  render() {
    console.log(this.state.store)
    return (
      <div className="container">
        <div className="row">
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "black"}}>
              <a className="navbar-brand" href="#" style={{color: "white", paddingLeft: "50px"}}>My Shopping Store</a>
                    <div className="col-md-6">
                        <h4 onClick={this.clickHandler} style={{paddingTop:"5px", color: "white"}}>Home</h4>
                    </div>
                      <p style={{color: "white"}}>Search By Category : </p>
                      <select style={{height: "30px", width: "150px"}} value={this.state.category} onChange={this.categorySelect}>
                          <option value="men's clothing">men's clothing</option>
                          <option value="jewelery">jewelery</option>
                          <option value="electronics">electronics</option>
                          <option value="women's clothing">women's clothing</option>
                      </select>
                      <button className="btn btn-outline-success" onClick={this.onFormSubmit} type="submit">Search</button>
              </nav>
        </div>
        <br></br>
        <div className="row">
          {
            this.state.loading ?
            <div className="loader"></div>
            :
            <div>
              {
                !this.state.isSearch || this.state.backToHome ? 
                <ShopData products={this.state.store} /> :
                <ShopData products={this.state.searchStore} />
              }
            </div>
          }
        </div>
      </div>
    )
  }
}
