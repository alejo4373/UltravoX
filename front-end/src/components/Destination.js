import React from 'react';

class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      id: event.target.value});
  }

  render() {
    return (
      <div class = "Block">
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.id} onChange={this.handleChange} placeholder="STOP ID" />
        </label>
      <p> {this.state.id} </p>
      </form>
      </div>
    );
  }
}
export default Destination
