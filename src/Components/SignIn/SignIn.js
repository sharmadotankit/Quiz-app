import './SignIn.css';
const SignIn = ({onRouteChange}) => {
    return (
        <div className="containerDiv">
        <h1>Sign In</h1>
            <label htmlFor="signinEmail">Email </label><br/>
            <input type="text" id="signinEmail" /><br />
            <label htmlFor="signinPassword">Password </label><br/>
            <input type="text" id="signinPassword" /><br />
            <button onClick={() =>onRouteChange('home')}>Sign In</button>
        </div>
    );
}

export default SignIn;