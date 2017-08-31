import React from 'react';
import Clock from './Clock.jsx';
import CountdownForm from './CountdownForm.jsx';
import Beep from './Beep.js';

require('style!css!sass!source/clock/assets/css/app.scss');

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      if (newCount === 0) Beep();
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }

  handleSetCountdownTime(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 1
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <Clock timeInSeconds={count} />
        <CountdownForm
          onSetCountdownTime={this.handleSetCountdownTime.bind(this)}
        />
      </div>
    );
  }
}

export default Countdown;
