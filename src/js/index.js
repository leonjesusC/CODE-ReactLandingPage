//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Navy from "./component/navbar.jsx";
import Jumbo from "./component/jumbotron.jsx";
import Cardy from "./component/cards.jsx";
import Foot from "./component/footer.jsx";

//render your react application
ReactDOM.render(
	<div>
		<Navy thyme="gray" />
		<Jumbo />
		<Cardy />
		<Foot />
	</div>,
	document.querySelector("#app")
);
