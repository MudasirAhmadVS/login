import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import AuthContext from "../store/AuthContext";

class Routes extends React.Component {
    static contextType = AuthContext;
    render() {
        return (
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/dashboard">
                    {!this.context.isLoggedIn && <Redirect to="login" />}
                    {this.context.isLoggedIn && <Dashboard></Dashboard>}
                </Route>
            </Switch>
        )
    }
}

export default Routes;