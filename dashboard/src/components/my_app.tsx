import React from 'react';
import { Outlet } from 'react-router-dom';
const MyApp = () => {
	return (
		<main>
			<div>SideBar</div>
			<div>
				<Outlet />
			</div>
		</main>
	);
};

export default MyApp;
