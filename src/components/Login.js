import React from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../store/AuthContext";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }
    static contextType = AuthContext;

    emailHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    componentDidMount() {
        console.log(this.context)
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log('Form Submitted');
        console.log(this.state.email, this.state.password);


        fetch("http://localhost:8085/auth", {
            method: "POST",
            body: JSON.stringify({
                identifier: this.state.email,
                password: this.state.password
            }),
            headers: { "Content-type": "application/json" }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Invalid Credentials");
                }
            })
            .then((data) => {
                this.context.login(true);
                console.log(data.message);
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    render() {
        if (this.context.isLoggedIn) {
            return <Redirect to="dashboard" />
        }
        else {
            return (
                <div>
                    <h1>Login Page</h1>
                    <form onSubmit={this.submitHandler}>
                        <label>Enter Email</label>
                        <input type='text' ref={this.nameInput} onChange={this.emailHandler}></input>

                        <label>Enter Password</label>
                        <input type='password' ref={this.passwordInput} onChange={this.passwordHandler}></input>

                        <button type="submit">Login</button>
                    </form>
                </div>
            )
        }
    }
}

export default Login;