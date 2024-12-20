import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Contact Page</h1>
			<div className="contact_buttons">
				<button onClick={() => navigate("info")}>Info</button>
				<button onClick={() => navigate("form")}>Form</button>
			</div>
		</div>
	);
}

export default Contact;
