import React, { Component } from 'react';
import { Translate } from 'react-localize-redux';
import { connect } from 'redux-bundler-react';

import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2 className="text-white text-xl italic mt-2">
            <Translate id="greeting" />
          </h2>
        </header>
        <p className="App-intro text-xl my-6">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button
            type="button"
            className="inline-block bg-blue text-white rounded-sm px-3 py-2"
            onClick={() => this.props.doNavigate('/about')}
          >
            About
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  'doNavigate',
  Home,
);
