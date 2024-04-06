import React from 'react';
import SearchInput from '../search_input_control';

const Header = () => {
	return (
		<div className="flex flex-col sm:flex-row sm:justify-between py-5">
			<h1 className="text-2xl font-medium text-gray-800">Hello Evano!</h1>
			<div>
				<SearchInput
					onSubmit={() => {}}
					value={''}
					onChange={() => {}}
					placeholder={'Search'}
					onReset={() => {}}
				/>
			</div>
		</div>
	);
};

export default Header;
