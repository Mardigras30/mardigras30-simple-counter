// Import React and ReactDOM into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Include the Bootstrap npm library into the bundle
import "bootstrap";

// Include the index.scss file into the bundle
import "../styles/index.css";

// Define the Home component
let Home = props => {
return (
<div
className="text-center pt-5 bg-dark text-white"
style={{ height: "100vh", fontSize: "100px" }}
>
<p className="d-inline px-2">
<i className="far fa-clock"></i>
</p>
<div className="d-inline">
<p className="d-inline digit-four">{props.four}</p>
<p className="d-inline digit-three">{props.three}</p>
<p className="d-inline digit-two">{props.two}</p>
<p className="d-inline digit-one">{props.one}</p>
</div>
</div>
);
};

// Define the propTypes for the Home component
Home.propTypes = {
four: PropTypes.string,
three: PropTypes.string,
two: PropTypes.string,
one: PropTypes.string,
};

// This function and logic is not mine
let counter = 0;
setInterval(function() {
const nfour = Math.floor(counter / 1000);
const nthree = Math.floor(counter / 100);
const ntwo = Math.floor(counter / 10);
const none = Math.floor(counter / 1);
console.log(nfour, nthree, ntwo, none);
counter++;
ReactDOM.render(
<Home four={nfour} three={nthree} two={ntwo} one={none} />,
document.querySelector("#app")
);
}, 1000);

// Render the React application
ReactDOM.render(<Home />, document.querySelector("#app"));