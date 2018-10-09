import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goodby from "./enhancecomponents/goodby";
import Welcome from "./enhancecomponents/welcome";
import ComponetOne from "./components/component-1";
import ComponetTwo from "./components/component-2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload...
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Goodby />
        <Welcome />
        <ComponetOne />
        <ComponetTwo />
      </div>
    );
  }
}

export default App;
