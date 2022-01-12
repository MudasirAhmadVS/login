import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './components/Header';
import Routes from './components/Routes';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <main>
          <Routes></Routes>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
