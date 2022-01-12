import React from "react";

const AuthContext = React.createContext();

export class AuthContextProvider extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoggedIn: localStorage.getItem("isLoggedIn"),
            login: this.loginHandler,
            logout: this.logoutHandler
        }
    }
    loginHandler = (value) => {
        console.log("Logged");
        this.setState({
            isLoggedIn: value
        })
        localStorage.setItem("isLoggedIn", value);
    }
    logoutHandler = () => {
        this.setState({
            isLoggedIn: false
        })
        localStorage.removeItem("isLoggedIn");
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContext;
