import logo from './logo.svg';
import './App.css';
import React from 'react';

import Counter from './components/counter';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      userName: ''
    }
  }

  loginHandler = (value) => {
    this.setState({ isLogged: value.isLogged, userName: value.userName })
  }
  logoutHandler = (event) => {
    event.preventDefault();
    this.setState({ isLogged: false })
  }

  render() {
    if (!this.state.isLogged) {
      return <Login onLoggedin={this.loginHandler}></Login>
    } else {
      return (
        <div>
          <h1>Welcome {this.state.userName}</h1>
          <button onClick={this.logoutHandler}>Logout</button>
        </div>
      )
    }
  }
}

export default App;
