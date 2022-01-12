import React from "react";
import AuthContext from "../store/AuthContext";

class Dashboard extends React.Component {
    static contextType = AuthContext;
    logoutHandler = (event) => {
        event.preventDefault();
        this.context.logout();
    }
    render() {
        return (
            <React.Fragment>
                <h1>Dashboard</h1>
                <button onClick={this.logoutHandler}>Logout</button>
            </React.Fragment>
        )

    }
}

export default Dashboard;