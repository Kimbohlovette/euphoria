import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './layout/sidebar';
import Header from './layout/header';
const MyApp = () => {
	return (
		<main className="grid grid-cols-[minmax(150px,_25%)_1fr] min-h-screen">
			<div>
				<SideBar />
			</div>
			<div className="bg-slate-100 px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
				<Header />
				<Outlet />
			</div>
		</main>
	);
};

export default MyApp;
