import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import CallUs from './CallUs'
import EmailUs from './EmailUs'
import ReachUs from './ReachUs'

export default function Contact() {
    return (
        <div>
            <h2>Contact to Us From below</h2>
            <BrowserRouter>
                <nav>    
                    <div><Link to="/emailus">Email Us</Link></div>
                    <div><Link to="/callus">Call Us</Link></div>
                    <div><Link to="/reachus">Reach Out to Us</Link></div>
                </nav>
                <Switch>
                    <Route path="/emailus" component={EmailUs}></Route>
                    <Route path="/callus" component={CallUs}></Route>
                    <Route path="/reachus" component={ReachUs}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
