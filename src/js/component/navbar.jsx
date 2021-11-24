import React from "react";
import PropTypes from "prop-types";

//create your first component
const Navy = props => {
	const thymeClasses = {
		gray: "bg-dark",
		blue: "bg-primary"
	};
	if (thymeClasses[props.thyme] === undefined)
		alert(`The color ${props.thyme} is not in the possible list of colors`);
	return (
		<>
			<nav
				className={`navbar navbar-expand-lg navbar-dark fixed-top ${
					thymeClasses[props.thyme]
				}`}>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a
								className="nav-link"
								aria-current="page"
								href="#">
								Home
							</a>
							<a className="nav-link" href="#">
								About
							</a>
							<a className="nav-link" href="#">
								Services
							</a>
							<a className="nav-link" href="#">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

Navy.propTypes = {
	thyme: PropTypes.string
};

export default Navy;
