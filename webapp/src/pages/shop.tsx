import { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const Shop = () => {
	const displayData = [
		{
			category: 'TShirts/Tops',
			collection: 'Summer Value Pack',
			tags: ['cool', 'colorful', 'comfy'],
			imageUrl: require('../assets/hero-image-one-transparent.png'),
		},
		{
			category: 'Sweaters/Tops',
			collection: 'Fall Travel Wardrobe',
			tags: ['cool', 'colorful', 'thick'],
			imageUrl: require('../assets/hero-image-two-transparent.png'),
		},
	];
	const [currentDisplayData, setDisplayData] = useState({
		category: 'TShirts/Tops',
		collection: 'Summer Value Pack',
		tags: ['cool', 'colorful', 'comfy'],
		imageUrl: require('../assets/hero-image-one-transparent.png'),
	});
	return (
		<div>
			<section>
				<div className="relative flex items-center *:flex-1 text-white bg-[#00b5dd] mix-blend-lighten aspect-square sm:aspect-video px-16">
					<div className="grid place-items-end">
						<div className="font-[100] w-4/5">
							<h1 className="text-2xl sm:text-3xl lg:text-4xl font-[100]">
								{currentDisplayData.category}
							</h1>
							<h1 className="text-4xl sm:text-5xl lg:text-7xl my-5 md:my-8">
								{currentDisplayData.collection}
							</h1>
							<div className="text-xl sm:text-2xl lg:text-3xl">
								{currentDisplayData.tags.join(' / ')}
							</div>
							<button className="py-3 px-10 rounded-lg text-gray-800 font-semibold bg-white mt-8">
								Shop Now
							</button>
						</div>
					</div>
					<div className="hidden sm:block h-full">
						<img
							src={currentDisplayData.imageUrl}
							alt=""
							className="object-top object-cover w-full h-full"
						/>
					</div>

					{/* Next / Prev buttons */}
					<button className="absolute right-1 p-0.5 hover:bg-gray-300/60 rounded-md">
						<HiChevronRight
							strokeWidth={1}
							className="text-2xl sm:text-4xl"
						/>
					</button>
					<button className="absolute left-1 p-0.5 hover:bg-gray-300/60 rounded-md">
						<HiChevronLeft
							strokeWidth={1}
							className="text-2xl sm:text-4xl"
						/>
					</button>

					{/* Page buttons */}
					<div className="absolute bottom-5 left-1/2 flex items-center justify-center gap-0.5">
						<button
							onClick={() => {
								if (currentDisplayData !== displayData[0]) {
									setDisplayData(displayData[0]);
								}
							}}
							className={`h-2 w-12 ${
								currentDisplayData === displayData[0]
									? 'bg-white'
									: 'bg-white/60'
							} rounded-l-full`}
						></button>
						<button
							onClick={() => {
								if (currentDisplayData !== displayData[1]) {
									setDisplayData(displayData[1]);
								}
							}}
							className={`h-2 w-12 ${
								currentDisplayData === displayData[1]
									? 'bg-white/60'
									: 'bg-white'
							} rounded-r-full`}
						></button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Shop;
