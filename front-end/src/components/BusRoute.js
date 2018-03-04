import React from 'react';

class BusRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      bus: event.target.value});
  }

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
