import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoverageList from './containers/coverageList';

class App extends Component {
  render() {
    const coverages = [
      {
        id: 1, 
        name: 'Cover 1'
      }, 
      {
        id: 2,
        name: 'Cover 2'
      }, 
      {
        id: 3,
        name: 'Cover 3'
      }, 
      {
        id: 4,
        name: 'Cover 4'
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Smart Madden Assistant</h1>
        </header>
        <p className="App-intro">
          To get started, choose a coverage from the list below.
        </p>
        <CoverageList coverages={coverages} />
      </div>
    );
  }
}

export default App;
