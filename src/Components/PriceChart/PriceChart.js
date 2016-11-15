import React from 'react';
import {LineChart} from 'react-easy-chart';

import './PriceChart.css';

var PriceChart = React.createClass({
  render() {
    var priceArr = this.props.prices.map(function(elem,index){
    	return {x: elem.diff, y: elem.price}
    });

    return (
    	<div className='priceChartWrapper'>
    		<LineChart 
    		    width={500}
    			height={425}
    			axes
    			yDomainRange={[this.props.min-100, this.props.max+100]}
    			xDomainRange={[0, this.props.timeDiff+10]}
    			axisLabels={{x: 'Time', y: 'Price ($)'}}
    			margin={{top: 15, right: 0, bottom: 0, left: 75}}
    			data={[priceArr]} />
    	</div>
    );
  }
})

export default PriceChart;