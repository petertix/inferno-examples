import React from 'react';
import Countdown from './Countdown.jsx';

class ClockApp extends React.Component {
  render() {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Inferno Countdown Timer</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            <Countdown />
          </div>
        </div>
      </div>
    );
  }
}

export default ClockApp;
