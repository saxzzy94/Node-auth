import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className={`nav `}>
			<div className="nav_logo">
				<img className="nav_logo " src={"Logo"} alt="logo" />
			</div>
			<div className="nav_buttons" style={{ margin: "1rem" }}>
				<Link to="/dashboard" className="nav_button">
					dashboard
				</Link>
				<Link to="/signin" className="nav_button">
					sign in
				</Link>
				<Link to="/signup" className="nav_button">
					sign up
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
