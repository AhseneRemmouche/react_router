import React from "react";
import { useLoaderData } from "react-router-dom";

const TodoDetails = () => {
	const TodoDetailsData = useLoaderData();
	return (
		<div className="todoDetails">
			<h1>Todo Details</h1>
			<p>
				<b>Title: </b>
				{TodoDetailsData.title}
			</p>
			<p>
				<b>
					Status: {TodoDetailsData.completed ? "Completed" : "Not Completed"}
				</b>
			</p>
		</div>
	);
};

export default TodoDetails;

export const TodoDetailsLoader = async ({ params }) => {
	const { id } = params;
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
	const data = await res.json();
	return data;
};
