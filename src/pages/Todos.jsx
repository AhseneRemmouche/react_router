import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Todos = () => {
	const todosData = useLoaderData();

	return (
		<>
			<h1>Todos List</h1>
			<div className="todos">
				{todosData.map((todo) => {
					return (
						<Link to={todo.id.toString()} key={todo.id}>
							<h4>{todo.title}</h4>
							<p> Status: {todo.completed ? "Completed" : "Not Completed"}</p>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Todos;

export const TodosLoader = async () => {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/todos?_limit=5"
	);
	const data = await res.json();

	return data;
};
