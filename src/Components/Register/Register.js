import { Component } from "react";
import {register} from '../../utils/authActions';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerEmail: '',
            registerPassword: '',
            registerName: '',
        }
    }

    onEmailChange = (event) => {
        this.setState({ registerEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ registerPassword: event.target.value })
    }

    onNameChange = (event) => {
        this.setState({ registerName: event.target.value })
    }

    onRegisterButtonClick =async () => {
        document.getElementById("error").innerText = "";

        if(this.state.registerEmail==="" || this.state.registerName==="" || this.state.registerPassword===""){
            document.getElementById("error").innerText = "Enter valid information";
        }
        else{

            let data = {
                    email: this.state.registerEmail,
                    password: this.state.registerPassword,
                    name: this.state.registerName
                }
            
            const response = await register(data);
            console.log('reg response',response)
            if(response.status){
                this.props.loadUser(response.data)
                this.props.onRouteChange('home')
            }else{
                document.getElementById("error").innerHTML = response.message;
            }
        }
        // ).then(response => response.json())
        //     .then(user => {
        //         if (user === "Unable to register. Please try again") {
        //             
        //         }
        //         else {
        //             this.props.loadUser(user)
        //             this.props.onRouteChange('home')
        //         }
        //     })
        // }
    }

    render() {
        return (
            <div className="containerDiv">
                <h1>Register</h1>
                <label htmlFor="registerName">Name </label><br />
                <input onChange={this.onNameChange} type="text" id="registerName" /><br />
                <label htmlFor="registerEmail">Email </label><br />
                <input onChange={this.onEmailChange} type="text" id="registerEmail" /><br />
                <label htmlFor="registerPassword">Password </label><br />
                <input onChange={this.onPasswordChange} type="password" id="registerPassword" /><br />
                <button onClick={this.onRegisterButtonClick}>Register</button>
                <div id="error" style={{ color: 'tomato', marginTop: "15px" }}></div>
            </div>
        );
    }
}


export default Register;
