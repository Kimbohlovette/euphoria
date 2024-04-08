import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyApp from './pages/my_app';
import Products from './pages/products';
import Shop from './pages/shop';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MyApp />,
		children: [
			{
				path: '',
				element: <Shop />,
			},
			{
				path: '/products',
				element: <Products />,
			},
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
