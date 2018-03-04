import React, { Component } from 'react';
import './App.css';
import BusRoute from './components/BusRoute.js';
import BusTime from './components/BusTime.js';
import Destination from './components/Destination.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      eta: "",
      minutesAway: "",
      proximityText: "",
      bus:"Q49",
      stop_id:"550669"
    };
  }

  getBustTime= () => {
    axios
    .post('/bus/get_time', { bus: this.state.bus, stop_id: this.state.stop_id })
    .then(res => {
        console.log('saved successfully', res)
        this.setState({
          eta: res.data.eta,
          minutesAway: res.data.minutesAway,
          proximityText: res.data.proximityText
      })
    }); 
 }
  render() {
    return (
      <div className="App"> 
      <h5>ULTRAVOX</h5>
         <BusRoute className = "Block" onClick={this.getBusTime} /><br />
         <Destination className = "Block"/><br />
         <BusTime className = "Block"/><br />

      </div>
    );
  }
}

export default App;
