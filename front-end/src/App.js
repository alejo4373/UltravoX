import React, { Component } from 'react';
import './App.css';
import BusRoute from './components/BusRoute.js';
import BusTime from './components/BusTime.js';
import Destination from './components/Destination.js';

class App extends Component {
  render() {
    return (
      <div className="App">
         <BusRoute />
         <BusTime />
         <Destination />
      </div>
    );
  }
}

export default App;
