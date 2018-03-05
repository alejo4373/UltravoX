import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import p5 from 'p5'
import 'p5/lib/addons/p5.sound'
import 'p5/lib/addons/p5.speech'

import BusRoute from './components/BusRoute.js';
import BusTime from './components/BusTime.js';
import StopCode from './components/StopCode.js';

//var p5 = require('p5')
var speechRec = new p5.SpeechRec()
var speaker = new p5.Speech()

class App extends Component {
  constructor() {
    super();
    this.state = {
      eta: "",
      minutesAway: "",
      proximityText: "",
      bus:"",
      stopCode:""
    };
  }

  handleBusVoiceInput = () => {
    speechRec = new p5.SpeechRec()
    console.log('listening for Bus')
    speechRec.start()
    speechRec.onResult = () => {
      this.setState({
        bus: speechRec.resultString.toUpperCase()
      })
    } 
  }

  handleStopCodeVoiceInput = () => {
    speechRec = new p5.SpeechRec()
    console.log('listening for StopCode')
    speechRec.start()
    speechRec.onResult = () => {
      this.setState({
        stopCode: speechRec.resultString.replace(/ /g,'')
      }) 
    }
  }

  componentDidUpdate() {
    speaker = new p5.Speech()
    console.log('componentDidUpdate')
    const { bus, stopCode, eta } = this.state;
    if((bus && stopCode) && eta === '') {
      axios
        .post('/bus/get_time', { bus: this.state.bus, stop_id: this.state.stopCode })
        .then(res => {
             var eta = res.data.eta
             var minutesAway = res.data.minutesAway
             var proximityText = res.data.proximityText
             var departureTime = '11:30pm'
             var textToSpeak

            console.log('saved successfully', res)
            if(minutesAway === null) {
              return speaker.speak(`The ${bus} is at the terminal, scheduled for departure at ${departureTime}`)
            }
            speaker.speak(`The ${bus} will be arriving in about ${res.data.minutesAway} minutes.`)
            this.setState({
              eta: eta,
              minutesAway: minutesAway,
              proximityText: proximityText
          })
        })
        .catch(err => {
            speaker.speak(`Something went wrong, please try again`)
        });  
    }
  }

  getBustTime= () => {
    
  }

  componentDidMount() {
    //speaker.speak('Welcome to the Ultravox App. Please speak clearly the bus number you are going to take. For example Q33') 
  }

  render() {
    console.log(this.state)
    return (
      <div className="App"> 
      <h5>ULTRAVOX</h5>
         <BusRoute 
           className="Block" 
           bus={this.state.bus}
           handleBusVoiceInput={this.handleBusVoiceInput} 
         />
         <StopCode 
           className="Block"
           stopCode={this.state.stopCode}
           handleStopCodeVoiceInput={this.handleStopCodeVoiceInput} 
         />
         <BusTime className="Block"/>

      </div>
    );
  }
}

export default App;
