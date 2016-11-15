import React from 'react';

import Header from './Components/Header/Header';
import BodyComponent from './Components/BodyComponent/BodyComponent';

import './App.css';

var App = React.createClass({
  render() {
    return (
      <div className="app">
        <Header />
        <BodyComponent />
      </div>
    );
  }
})

export default App;
