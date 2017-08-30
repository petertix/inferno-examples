import React from 'react';
import ReactDom from 'react-dom';

class ListItems extends React.Component {
  constructor() {
    super();
    this.state = { active: true };
  }

  render() {
    return (
      <div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default ListItems;
