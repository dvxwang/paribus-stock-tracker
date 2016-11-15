import React from 'react';

import './TableRow.css';

var TableRow = React.createClass({
  render() {
    return (
    	<div className='tableRowWrapper' style={{backgroundColor: this.props.color}}>
    		<div className='smallData'>{this.props.item.date}</div>
    		<div className='smallData'>{this.props.item.time}</div>
    		<div className='longData'>{this.props.item.stock}</div>
    		<div className='smallData'>{this.props.item.price}</div>
    	</div>
    );
  }
})

export default TableRow;