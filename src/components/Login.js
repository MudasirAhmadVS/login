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

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    submitHandler = (event) => {
        event.preventDefault();

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
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    render() {
        if (this.context.isLoggedIn) {
            return <Redirect to="dashboard" />
        }
        return (
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.submitHandler}>
                    <label>Enter Email</label>
                    <input type='text' name="email" onChange={this.inputHandler}></input>

                    <label>Enter Password</label>
                    <input type='password' name="password" onChange={this.inputHandler}></input>

                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;