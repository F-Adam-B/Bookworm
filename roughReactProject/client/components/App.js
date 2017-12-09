import React from 'react';
import NavigationBar from "./NavigationBar"
import SignUpForm from "./SignUpForm"
import Greetings from "./Greetings"

class App extends React.Component {
    render() {
        return (
        <div>
            <div className="container">
                <NavigationBar />
            </div>
            <div className="container">
                <SignUpForm />
                <Greetings />

            </div>
        </div>
        )
    }
}

export default App