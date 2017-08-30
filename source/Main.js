import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Link, Switch, Route } from 'react-router-dom';

import Button from './button/Button.jsx';
import Countdown from './clock/Countdown.jsx';
import Home from './home/Home.js';
import ListItems from './listitems/ListItems.js';
// import Popover from './popover/Popover.js';

// Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css');
//$(document).foundation();

// Load App css
//require('style!css!sass!applicationStyles');
// require('style!css!sass!source/clock/assets/css/app.scss');

const ElementAPI = {
  elements: [
    { number: 1, name: 'Hydrogen', boiling: '-252.9' },
    { number: 2, name: 'Helium', boiling: '-268.9' },
    { number: 3, name: 'Lithium', boiling: '1341.9' },
    { number: 4, name: 'Beryllium', boiling: '2468.9' },
    { number: 5, name: 'Boron', boiling: '3926.9' },
    { number: 6, name: 'Carbon', boiling: '4026.9' }
  ],
  all: function() {
    return this.elements;
  },
  get: function(id) {
    const isElement = p => p.number === id;
    return this.elements.find(isElement);
  }
};

const DataDetail = () =>
  <div>
    <ul>
      {ElementAPI.all().map(p =>
        <li key={p.number}>
          <Link to={`/data/${p.number}`}>
            {p.name}
          </Link>
        </li>
      )}
    </ul>
  </div>;

const Element = props => {
  const element = ElementAPI.get(parseInt(props.match.params.number, 10));
  if (!element) {
    return <div>Sorry, but the element was not found</div>;
  }
  return (
    <div>
      <h1>
        {element.name} (#{element.number})
      </h1>
      <h2>
        Boiling: {element.boiling}
      </h2>
      <Link to="/data">Back</Link>
    </div>
  );
};

const Data = () =>
  <Switch>
    <Route exact path="/data" component={DataDetail} />
    <Route path="/data/:number" component={Element} />
  </Switch>;

const Main = () =>
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/data" component={Data} />
      <Route path="/listitems" component={ListItems} />
      <Route path="/button" component={Button} />
      <Route path="/countdown" component={Countdown} />
    </Switch>
  </main>;

const Header = () =>
  <header>
    <h1>Tools by Peter</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/data">Data</Link>
        </li>
        <li>
          <Link to="/listitems">ListItems</Link>
        </li>
        <li>
          <Link to="/button">Button</Link>
        </li>
        <li>
          <Link to="/countdown">Countdown</Link>
        </li>
      </ul>
    </nav>
  </header>;

const App = () =>
  <div>
    <Header />
    <Main />
  </div>;

ReactDom.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
);
