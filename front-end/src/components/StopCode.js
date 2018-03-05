import React from 'react';
import axios from 'axios'; 

class Destination extends React.Component {
  render() {
    return (
      <div 
        class = "Block"
        onClick={this.props.handleStopCodeVoiceInput}
      >
        {this.props.stopCode}
      </div>
    );
  }
}
export default Destination

