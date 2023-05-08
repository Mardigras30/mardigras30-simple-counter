import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

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
		  <p className="d-inline digitFour">{props.four}</p>
		  <p className="d-inline digitThree">3</p>
		  <p className="d-inline digitTwo">2</p>
		  <p className="d-inline digitOne">1</p>
		</div>
	  </div>
	);
};
	  Home.propTypes = {
		four: PropType.string
	};
