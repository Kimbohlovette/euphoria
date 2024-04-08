import React from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';

const ProfileDropdownButton = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2">
				<div className="rounded-full size-12 grid place-items-center overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						className="w-full object-center object-cover"
						alt=""
					/>
				</div>
				<div className="flex flex-col">
					<span className="text-sm text-gray-800 font-medium">
						Evano
					</span>
					<span className="text-xs text-gray-400">
						Project Manager
					</span>
				</div>
			</div>
			<IoChevronDownSharp className="text-gray-600" />
		</div>
	);
};

export default ProfileDropdownButton;
