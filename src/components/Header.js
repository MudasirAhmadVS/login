import React from "react";
import { Link } from 'react-router-dom';
import AuthContext from "../store/AuthContext";

class Header extends React.Component {
    static contextType = AuthContext;
    render() {
        return (
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                {!this.context.isLoggedIn && <li><Link to="/login">Login</Link></li>}
            </ul>
        )
    }
}

export default Header;