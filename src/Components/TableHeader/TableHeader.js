import React from 'react';

import './TableHeader.css';

var TableHeader = React.createClass({
  render() {
    return (
    	<div className='tableHeaderWrapper'>
    		<div className='smallData'>Date</div>
    		<div className='smallData'>Time</div>
    		<div className='longData'>Stock</div>
    		<div className='smallData'>Price ($)</div>
    	</div>
    );
  }
})

export default TableHeader;