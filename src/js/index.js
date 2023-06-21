//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";



//import your own components
import SimpleCounter from "./component/home.jsx";





//render your react application
ReactDOM.render(<SimpleCounter digitSix={ six} digitFive={ five} digitFour={ four} digitThree={ three} digitTwo={two} digitOne={ one}/>,
document.querySelector("#app"));

