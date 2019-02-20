import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarWars from './StarWars';

class App extends Component {
  render() {
    return (
      <div className="App">
       <StarWars/>
      </div>
    );
  }
}

export default App;
