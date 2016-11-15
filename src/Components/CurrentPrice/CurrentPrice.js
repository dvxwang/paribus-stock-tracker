import React from 'react';

import './CurrentPrice.css';

var CurrentPrice = React.createClass({
  render() {
    return (
    	<div className="currentPriceWrapper">
   			<div className='stockHeader'>{this.props.stockName}</div>
   			<div className='priceTitle'>Most recent price:</div>
   			<div className='currentPrice'>{this.props.currentPrice}</div>
    	</div>
    );
  }
})

export default CurrentPrice;