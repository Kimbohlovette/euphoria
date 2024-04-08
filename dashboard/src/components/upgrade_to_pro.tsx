import React from 'react';

const UpgradeToPro = () => {
	return (
		<div className="px-5 py-5 md:px-8 rounded-3xl bg-gradient-to-r from-violet-950 via-violet-900 to-violet-800 flex flex-col items-center gap-5">
			<h1 className="text-white font-semibold text-center">
				Upgrade to PRO get access to all Features!
			</h1>
			<button className="bg-white text-gray-800 font-semibold px-8 py-2 rounded-full hover:bg-violet-200">
				Get Pro Now!
			</button>
		</div>
	);
};

export default UpgradeToPro;
