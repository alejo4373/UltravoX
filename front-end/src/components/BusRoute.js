import React from 'react';

class BusRoute extends React.Component {
  handleClick = () => {
    console.log('clicked')
    this
      .props
      .handleBusVoiceInput()
  }
  render() {
    return (
      <div onClick={this.handleClick} class="Block">
        {this.props.listening
          ? 'listening'
          : (this.props.bus
            ? this.props.bus
            : <img className='mic' src='/microphone.png' alt='microphone'/>)}
      </div>
    );
  }
}
export default BusRoute
