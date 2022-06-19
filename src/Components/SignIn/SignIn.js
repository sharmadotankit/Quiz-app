import { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }


    onSignInButtonClick = () => {
        document.getElementById("error").innerText = "";
        if (this.state.signInEmail === '' || this.state.signInPassword === '') {
            document.getElementById("error").innerText = "Please enter valid credentials!";
        }
        else {
            fetch("http://localhost:4001/signin", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    email: this.state.signInEmail,
                    password: this.state.signInPassword
                })
            }).then(response => response.json())
                .then(user => {
                    console.log(user)
                    if (user === 'Wrong Credentials!' || user === "Unable to get user") {
                        document.getElementById("error").innerHTML = "Wrong Credentials! Please try again";
                    }
                    else {
                        this.props.loadUser(user)
                        this.props.onRouteChange('home')
                    }
                })
        }
    }

    render() {
        return (
            <div className="containerDiv">
                <h1>Sign In</h1>
                <label htmlFor="signinEmail">Email </label><br />
                <input onChange={this.onEmailChange} type="text" id="signinEmail" /><br />
                <label htmlFor="signinPassword">Password </label><br />
                <input onChange={this.onPasswordChange} type="password" id="signinPassword" /><br />
                <button onClick={this.onSignInButtonClick}>Sign In</button>
                <div id="error" style={{ color: 'tomato', marginTop: "15px" }}></div>
            </div>
        );
    }
}


export default SignIn;
