import React from 'react';
import { render } from 'react-dom';
import ClockUI from './ClockUI';

class ClockSetup extends React.Component {
  state = {
    time: new Date()
  }

  componentDidMount() {
    setInterval(() => {
      this.tick()
    }, 1000)
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }
  
  render() {
    return (
      <ClockUI time={this.state.time.toLocaleTimeString()}/>
    );
  }
}

render(<ClockSetup/>, document.getElementById('root'))