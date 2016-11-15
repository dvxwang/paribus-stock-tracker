import React from 'react';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';

import './PastPrices.css';

var PastPrices = React.createClass({
  render() {

  	var tableRows = this.props.pastPrices.map((elem,index)=> <TableRow color={index%2===0 ? "none":"aliceblue"} item={elem} key={index}/>);

    return (
    	<div className='pastPricesWrapper'>
    		<TableHeader />
    		<div className='pastPricesRows'>
    			{tableRows}
    		</div>
    	</div>
    );
  }
})

export default PastPrices;