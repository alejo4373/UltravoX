import React from 'react';
import axios from 'axios'; 

class BusRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      route: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      bus: event.target.value});
  }

//   componentDidMount() {
//     axios
//     .get('/bus/get_time')
//     .then(res => {
//         console.log("response", res)
//         this.setState({
//             route: res.data.data
//         })
//     })
// }  


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
