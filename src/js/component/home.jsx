import React from "react";
import PropTypes from "prop-types"; 
import ReactDOM from "react-dom";


//create your first component
function  SimpleCounter(props)  {
	return (
		<div className="counter">
    <div class="col"><i className="far fa-clock"></i>	
    </div>
    <div className="col-four">{props.digitFour %10}</div>
    <div className="col-three">{props.digitThree %10}</div>
	<div className="col-two">{props.digitTwo % 10}</div>
	<div className="col-one">{props.digitOne %10}</div>
  </div>);
}
SimpleCounter.propTypes ={
digitFour: PropTypes.number,
digitThree: PropTypes.number,
digitTwo: PropTypes.number,
digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const  four = Math.floor(counter/1000);
	const  three = Math.floor(counter/100);
	const  two = Math.floor(counter/10);
	const  one = Math.floor(counter/1);
console.log(four,three, two, one); 

counter++; 
ReactDOM.render(
	<SimpleCounter  digitOne={ one} digitTwo={two} digitThree={three} digitFour={four} />,
	document.querySelector("#app"));
	
}, 1000);



export default SimpleCounter;
