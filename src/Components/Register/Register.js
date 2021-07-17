const Register = ({ onRouteChange }) => {
    return (
        <div className="containerDiv">
            <h1>Register</h1>
            <label htmlFor="name">Name </label><br />
            <input type="text" id="name" /><br />
            <label htmlFor="email">Email </label><br />
            <input type="text" id="email" /><br />
            <label htmlFor="password">Password </label><br />
            <input type="text" id="password" /><br />
            <button onClick={() => onRouteChange('home')}>Register</button>
        </div>
    );
}

export default Register;