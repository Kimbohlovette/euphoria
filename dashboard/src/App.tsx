import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyApp from './components/my_app';
import Categories from './pages/categories';
import Help from './pages/help';
import Income from './pages/income';
import Products from './pages/products';
import Promote from './pages/promote';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MyApp />,
		children: [
			{
				path: '',
				element: <Dashboard />,
			},
			{
				path: '/categories',
				element: <Categories />,
			},
			{
				path: '/products',
				element: <Products />,
			},
			{
				path: '/income',
				element: <Income />,
			},
			{
				path: '/promote',
				element: <Promote />,
			},
			{
				path: '/help',
				element: <Help />,
			},
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}
export default App;
