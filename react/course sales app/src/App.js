import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales';

class App extends Component {
  render() {
    var courses = [
      {name:'COMPLETE FRONT END DEVELOPER COURSE' , price: 10000},
      {name: 'COMPLETE REACTJS COURSE' , price: 15000},
      {name: 'ANDROID COURSE BEGINNER LEVEL', price: 12900},
      {name: 'COMPLETE IOS 10 BOOTCAMP' , price: 13000},
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WELCOME TO COURSE SALES APP</h1>
        </header>
        <CourseSales items={courses} />
      </div>
    );
  }
}

export default App;
