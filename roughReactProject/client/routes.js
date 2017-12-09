import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App'
import SignUpForm from "./components/SignUpForm"
import Greetings from "./components/Greetings"

export default () => {
        return (
        <Router>
            <div className="app">
                <Route exact path="/" component={App} />
                <Route exact path="/signupform" component={SignUpForm} />
                <Route exact path="/greetings" component={Greetings} />
            </div>
        </Router>
    )
}   