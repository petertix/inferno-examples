import React from 'react';
import ReactDom from 'react-dom';

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = { active: true };
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const buttonSwitch = this.state.active ? 'On' : 'Off';
    return (
      <div>
        <p>Click the button!</p>
        <input type="submit" onClick={this.handleClick} />
        <p>
          {buttonSwitch}
        </p>
      </div>
    );
  }
}

// React.render(<App />, document.getElementById('content'));

ReactDom.render(
  <div>
    <Button />
  </div>,
  document.getElementById('app')
);
