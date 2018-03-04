import React, { Component } from 'react';
import './App.css';
import BusRoute from './components/BusRoute.js';
import BusTime from './components/BusTime.js';
import Destination from './components/Destination.js';



class App extends Component {
  render() {
    return (
      <div className="App"> 
      <h5>ULTRAVOX</h5>
         <BusRoute class = "Block"/><br />
         <Destination class = "Block"/><br />
         <BusTime class = "Block"/><br />

      </div>
    );
  }
}

export default App;
