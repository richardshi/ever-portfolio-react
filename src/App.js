import React from 'react';
import './App.css';
import LandingAnimation from './components/LandingAnimation/LandingAnimation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingAnimation></LandingAnimation>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Richard loves EVER memeda
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
    </div>
  );
}

export default App;
