import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/navbar';

const MyApp = () => {
	return (
		<main className="max-w-screen-2xl mx-auto">
			<Navbar />
			<Outlet />
		</main>
	);
};

export default MyApp;
