import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
        }
        this.nameInput = React.createRef();
        this.passwordInput = React.createRef();
    }
    // emailHandler = (event) => {
    //     let text = event.target.value;
    //     if (text.length <= 0) {

    //     }
    //     //console.log(text);
    // }
    // passwordHandler = (event) => {
    //     let text = event.target.value;
    //     if (text.length <= 8) {

    //     }
    //     //console.log(text);
    // }
    submitHandler = (event) => {
        event.preventDefault();
        console.log('form Submitted');
        const password = this.passwordInput.current.value;
        const userName = this.nameInput.current.value;

        fetch('https://61dd3750f60e8f0017668640.mockapi.io/users')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let user = data.find(user => user.userName === userName);
                if (!user) {
                    console.log('No User Againt this Email');
                } else if (user && user.userName === userName && user.password === password) {
                    this.props.onLoggedin({
                        isLogged: true,
                        userName: userName
                    });
                } else if (user.password !== password) {
                    this.state.isValid = true;
                }
            })
    }

    render() {
        return (
            <>
                <h1>Login Page</h1>
                <form onSubmit={this.submitHandler}>
                    <label>Enter Email</label>
                    <input type='email' ref={this.nameInput} onChange={this.emailHandler}></input>

                    <label>Enter Password</label>
                    <input type='password' ref={this.passwordInput} onChange={this.passwordHandler}></input>

                    <button type="submit">Login</button>
                </form>
                <p>{this.state.errorMsg}</p>
                {this.state.isValid && <p>Invalid Credentials</p>}
            </>
        )
    }
}

export default Login;