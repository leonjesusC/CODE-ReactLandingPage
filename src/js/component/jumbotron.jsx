import React from "react";
import PropTypes from "prop-types";

const Jumbo = () => {
	return (
		<div className="row justify-content-center my-4 pt-4">
			<div className="col-10">
				<div className="jumbotron bg-light text-dark my-4 p-4 mx-3">
					<h1 className="display-4 font-weight-bold">
						{" "}
						A Warm Welcome!
					</h1>
					<p className="lead text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum
					</p>
					<p className="lead p-2">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Learn more
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Jumbo;
