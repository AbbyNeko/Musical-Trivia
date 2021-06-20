import React, { Component } from 'react';
import './App.css';
import Trivia from './components/Trivia';

class App extends Component {


    render() {
      return (
        <div className="App">
          <header className="App-header">
          <h1>Some Fun Musical Trivia</h1>
          <Trivia/>
          </header>
        </div>
      );
    }

}

export default App;
