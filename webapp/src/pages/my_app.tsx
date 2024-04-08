import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/navbar';

const MyApp = () => {
	return (
		<main>
			<Navbar />
			<Outlet />
		</main>
	);
};

export default MyApp;
