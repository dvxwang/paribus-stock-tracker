import React from 'react';

import './Header.css';

var Header = React.createClass({
  render() {
    return (
      <div className="header">
        <div className="logoLeft"></div>
        <div className="headerText">Paribus Stock Ticker</div>
        <div className="logoRight"></div>
      </div>
    );
  }
})

export default Header;
