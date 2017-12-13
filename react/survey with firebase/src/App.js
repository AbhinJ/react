import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PECSURVEY from './PEC_SURVEY';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to PEC-SURVEY-APP</h1>
        </header>
        <PECSURVEY />
      </div>
    );
  }
}

export default App;
