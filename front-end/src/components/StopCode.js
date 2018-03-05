import React from 'react';

class Destination extends React.Component {
  render() {
    return (
      <div className="Block" onClick={this.props.handleStopCodeVoiceInput}>
        {this.props.bus
          ? (this.props.listening2
            ? 'Listening'
            : (this.props.stopCode
              ? this.props.stopCode
              : <img src='/microphone.png' alt='microphone'/>))
          : 'Press'
}
      </div>
    );
  }
}
export default Destination
