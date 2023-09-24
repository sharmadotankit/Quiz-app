import { Component } from 'react';
import './SignIn.css';
import {signIn} from '../../utils/authActions';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


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


    onSignInButtonClick = async() => {
        document.getElementById("error").innerText = "";
        if (this.state.signInEmail === '' || this.state.signInPassword === '') {
            document.getElementById("error").innerText = "Please enter valid credentials!";
        }
        else {
            let data ={
                email: this.state.signInEmail,password: this.state.signInPassword
            }
            const response =  await signIn(data);
            if(response.status){
                this.props.loadUser(response.data)
                this.props.onRouteChange('home')
            }else{
                document.getElementById("error").innerHTML = response.message;
            }
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
