import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import About from './AboutUs'
import ContactUs from './ContactUs'
import Home from './Home'

export default function RoutingDemo() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img className="navbar-brand" height="200px" width="100px"
                        src="http://companies.naukri.com/xoriantnew-jobs/wp-content/uploads/sites/27279/2018/10/XORIANT-OG-TAG-LOGO.jpg"></img>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="nav-item nav-link"><Link to="/home">Home</Link></li>
                        <li className="nav-item nav-link"><Link to="/aboutus">About Us</Link></li>
                        <li className="nav-item nav-link"><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                </nav>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/aboutus" component={About}></Route>
                    <Route path="/contactus" component={ContactUs}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
