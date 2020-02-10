import React from 'react';
import logo from './logo.svg';
import FuzzyMatchInput from "./FuzzyMatchInput";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div
        className="fuzzy-match-container"
        style={{display: `flex`, alignItems: `center`, height: `300px`, margin: `0 auto`, justifyContent: `space-between`, width: `300px`}}
      >
        <FuzzyMatchInput answer="strawberry"/>
      </div>
    </div>
  );
}

export default App;
