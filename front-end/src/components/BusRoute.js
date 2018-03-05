
import React from 'react';

class BusRoute extends React.Component {
  handleClick = () => {
    console.log('clicked')
    this.props.handleBusVoiceInput()
  }
  render() {
    return (
      <div onClick={this.handleClick} class = "Block">
        {this.props.bus}
      </div>
    );
  }
}
export default BusRoute
