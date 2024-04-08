import { BsBox } from 'react-icons/bs';
import { HiChevronRight } from 'react-icons/hi2';
import { LuBadgePercent } from 'react-icons/lu';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { PiCoinsThin, PiKeyThin } from 'react-icons/pi';
import { TbMessageCircleQuestion, TbSettings2 } from 'react-icons/tb';
import { NavLink, useLocation } from 'react-router-dom';
import UpgradeToPro from '../upgrade_to_pro';
import ProfileDropdownButton from '../profile_dropdown_button';
const SideBar = () => {
	return (
		<div className="relative bg-white py-5 sm:py-8 px-5 h-screen">
			<header className="flex items-center gap-4 text-3xl text-gray-900 py-5">
				<TbSettings2 />
				<div className="flex items-end gap-0.5">
					<h1>Dashboard</h1>
					<span className="text-xs p-1">v1.0.0</span>
				</div>
			</header>
			<nav>
				<ul className="py-2 flex flex-col gap-4">
					<NavItem
						Icon={<IconWrapper Icon={<PiKeyThin size={14} />} />}
						to="/"
						title="Dashboard"
					/>
					<NavItem
						Icon={<IconWrapper Icon={<BsBox size={14} />} />}
						to="/products"
						title="Products"
					/>
					<NavItem
						Icon={
							<IconWrapper
								Icon={<MdOutlinePersonOutline size={14} />}
							/>
						}
						to="/categories"
						title="Categories"
					/>
					<NavItem
						Icon={<IconWrapper Icon={<PiCoinsThin size={14} />} />}
						to="/income"
						title="Income"
					/>
					<NavItem
						Icon={<LuBadgePercent size={24} />}
						to="/promote"
						title="Promote"
					/>
					<NavItem
						Icon={<TbMessageCircleQuestion size={24} />}
						to="/help"
						title="Help"
					/>
				</ul>
			</nav>
			<div className="absolute bottom-10 left-0 flex flex-col gap-5 px-5">
				<UpgradeToPro />
				<ProfileDropdownButton />
			</div>
		</div>
	);
};

export default SideBar;

interface NavItemProps {
	to: string;
	title: string;
	Icon: JSX.Element;
}
const NavItem = ({ to, title, Icon }: NavItemProps) => {
	const location = useLocation(); // get current route url

	return (
		<li
			className={`${
				location.pathname === to
					? 'bg-gray-900 text-gray-100'
					: 'text-gray-500'
			} rounded-xl`}
		>
			<NavLink to={to} className="py-2 px-4 flex items-center">
				<div className="flex-1 flex items-center gap-4">
					<div>{Icon}</div>
					<span>{title}</span>
				</div>
				<HiChevronRight />
			</NavLink>
		</li>
	);
};

const IconWrapper = ({ Icon }: { Icon: JSX.Element }) => {
	return (
		<div className="h-6 aspect-square border border-gray-500 rounded-md grid place-items-center">
			{Icon}
		</div>
	);
};
