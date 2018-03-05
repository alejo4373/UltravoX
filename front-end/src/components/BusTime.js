import React from 'react';


class BusTime extends React.Component {

  render() {
    return (
      <div class='Block'>
        {!this.props.bus ? 'Mic' : (this.props.stopCode ? `${this.props.minutesAway} minutes away` : 'Press Mic')}

      </div>
    )
  }
}

export default BusTime

// !this.props.listening2 && !this.props.listening
// ? <h1>Mic</h1>
// : this.props.listening && this.props.listening2
//   ? <h1>Minutes Away</h1>
//   : `Minutes Away`