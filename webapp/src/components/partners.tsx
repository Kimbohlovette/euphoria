const Partners = () => {
	return (
		<div>
			<div className="p-4 sm:p-8 bg-gray-800 rounded-xl">
				<div className="flex items-center justify-center flex-col gap-2">
					<h1 className="text-white font-[50] text-3xl sm:text-4xl">
						Top Brands Deals
					</h1>
					<p className="text-white font-light text-lg sm:text-xl">
						Up to{" "}
						<span className="text-amber-500 font-bold">60%</span>{" "}
						off on Brands
					</p>
					<div className="flex flex-wrap justify-center items-center gap-4 mt-8">
						{Array(5)
							.fill(1)
							.map((_, key) => {
								return (
									<img
										className="max-h-16 aspect-video"
										key={key}
										src={require("../assets/brands/brand" +
											(key + 1) +
											".png")}
										alt=""
									/>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
