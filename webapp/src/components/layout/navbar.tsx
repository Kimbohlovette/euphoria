import { CiHeart } from 'react-icons/ci';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="flex items-center justify-between py-5 px-8">
			<h1 className="text-2xl text-gray-700 cursor-pointer">Euphoria</h1>
			<div className="flex items-center gap-4">
				<nav>
					<ul className="flex items-center justify-center text-gray-500 gap-5 text-lg">
						<NavLink to="/">
							<li>Shop</li>
						</NavLink>
						<NavLink to={`/products?cat=men`}>
							<li>Men</li>
						</NavLink>
						<NavLink to={`/products?cat=women`}>
							<li>Women</li>
						</NavLink>
						<NavLink to={`/products?cat=combos`}>
							<li>Combos</li>
						</NavLink>
						<NavLink to={`/products?cat=joggers`}>
							<li>Joggers</li>
						</NavLink>
					</ul>
				</nav>
				<div>Search</div>
			</div>
			<div className="flex items-center gap-4 *:p-1.5 *:bg-gray-100 *:rounded-md text-gray-400">
				<button>
					<CiHeart />
				</button>
				<button>
					<FiShoppingCart />
				</button>
				<button>
					<FiUser />
				</button>
			</div>
		</header>
	);
};

export default Navbar;
