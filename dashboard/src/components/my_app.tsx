import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './layout/sidebar';
import Header from './layout/header';
const MyApp = () => {
	return (
		<main className="grid grid-cols-[minmax(300px,_16%)_1fr] min-h-screen">
			<SideBar />

			<div className="bg-slate-100 px-4 sm:px-8 lg:px-12 py-5 sm:py-8">
				<Header />
				<Outlet />
			</div>
		</main>
	);
};

export default MyApp;
