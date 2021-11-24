import React from "react";
import PropTypes from "prop-types";

let imgLink =
	"data:image/png;base64,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";

let singleCard = (
	<div className="col">
		<div className="card">
			<img src={imgLink} className="card-img-top " alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">
					{" "}
					<b>Card title</b>
				</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	</div>
);

const Cardy = () => {
	return (
		<div className="row row-cols-1 row-cols-md-5 g-8 justify-content-center">
			{singleCard}
			{singleCard}
			{singleCard}
			{singleCard}
		</div>
	);
};

export default Cardy;
