
import React from 'react';
import axios from 'axios';
 

class BusRoute extends React.Component {


  render() {
    return (
      <div class = "Block">
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.bus} onChange={this.handleChange} placeholder="BUS NUMBER" />
        </label>
        <p> {this.state.bus}</p>
      </form>
      </div>
    );
  }
}
export default BusRoute
