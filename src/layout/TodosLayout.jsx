import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

const TodosLayout = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default TodosLayout;
