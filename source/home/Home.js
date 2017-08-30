import React from 'react';
import ReactDom from 'react-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { active: true };
  }

  render() {
    return (
      <div>
        <h1>Welcome to Tools by Peter</h1>
      </div>
    );
  }
}

// const Home = () =>
//   <div>
//     <h1>Welcome to Tools by Peter</h1>
//  </div>;

export default Home;
