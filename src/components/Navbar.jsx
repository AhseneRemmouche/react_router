import React from "react";
import logo from "../assets/reactrouter.svg";

function Navbar() {
	return (
		<div>
			<img src={logo} alt="" width={50} />
			<ul>
				<li>Home</li>
				<li>Products</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<button>Get Started</button>
		</div>
	);
}

export default Navbar;
