import React from 'react';
import CurrentPrice from '../CurrentPrice/CurrentPrice';
import PastPrices from '../PastPrices/PastPrices';
import PriceChart from '../PriceChart/PriceChart';
import $ from 'jquery';

import './BodyComponent.css';

var BodyComponent = React.createClass({

  getInitialState(){
    return {
      stockName: "S&P 500",
      currentPrice: "-",
      pastPrices: [],
      min: null,
      max: null,
      timeBase: null,
      timeDiff: null
    }
  },

  queryPrice(){
    setTimeout(() => {
      $.ajax({
        url: "https://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%20%3D%20%22http%3A%2F%2Fmoney.cnn.com%2Fdata%2Fmarkets%2Fsandp%2F%22%20and%20xpath%20%3D%20%22%2F%2Ftd%5B%40class%3D'wsod_last%20wsod_lastIndex'%5D%2F%2Fspan%20%7C%20%2F%2Fdiv%5B%40class%3D'wsod_fRight'%5D%2F%2Fspan%22&format=json&diagnostics=true&callback=",
        context: this,
        success: function(json){
          console.log("Time: ", json)
          var tempPrices = this.state.pastPrices.slice(0);
          var result = parseFloat(json.query.results.span[0].replace(/,/g,''));
          var timeArr = json.query.results.span[1].split(",");
          var hour = parseInt(timeArr[0].split(":")[0])-1
          var minute = timeArr[0].split(":")[1].split(" ")[0].slice(0,2)
          if (timeArr[0].split(":")[1].split(" ")[0].slice(2)==="pm") hour+=12;
          var priceDate = new Date(parseInt(timeArr[1].split("/")[2]),parseInt(timeArr[1].split("/")[0])-1,parseInt(timeArr[1].split("/")[1]),hour,parseInt(minute));

          var newTimeBase = (!this.state.timeMin) ? priceDate.getTime() : this.state.timeBase;
          var newTimeDiff = (priceDate.getTime()-newTimeBase)/1000;
          
          var tempMin = (!this.state.min || this.state.min>result) ? result: this.state.min;
          var tempMax = (!this.state.max || this.state.max<result) ? result: this.state.max;

          if (!tempPrices.length || tempPrices[tempPrices.length-1].price !== result){
            var priceObj = {
              date: timeArr[1],
              time: timeArr[0],
              diff: newTimeDiff,
              stock: this.state.stockName,
              price: result
            }
            tempPrices.push(priceObj);
          }

          this.setState({
            currentPrice: result,
            pastPrices: tempPrices,
            min: tempMin,
            max: tempMax,
            timeBase: newTimeBase,
            timeDiff: newTimeDiff
          })
        }
      });
    },1000)
  },

  componentDidUpdate(){
    this.queryPrice();
  },

  componentDidMount(){
    this.queryPrice();
  },

  render() {
    return (
    	<div className="body">
    		<div className="bodyPanel">
	    		<CurrentPrice currentPrice={this.state.currentPrice} stockName={this.state.stockName} />
	    		<PastPrices pastPrices={this.state.pastPrices} />
	    	</div>
	    	<div className="bodyPanel">
    			<PriceChart prices={this.state.pastPrices} min={this.state.min} max={this.state.max} timeDiff={this.state.timeDiff}/>
    		</div>
    	</div>
    );
  }
})

export default BodyComponent;
