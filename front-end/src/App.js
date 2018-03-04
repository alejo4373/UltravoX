import React, { Component } from 'react';
import './App.css';
import BusRoute from './components/BusRoute.js';
import BusTime from './components/BusTime.js';
import Destination from './components/Destination.js';



class App extends Component {
  render() {
    return (
      <div className="App"> <br />
      <h5>ULTRAVOX</h5>
         <BusRoute /><br />
         <Destination /><br />
         <BusTime /><br />

      </div>
    );
  }
}

export default App;
