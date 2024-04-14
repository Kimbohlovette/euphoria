import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import CategoryCard from "../components/cards/category_card";
import CategoryCardWithContent from "../components/cards/category_card_with_content";
import ProductCard from "../components/cards/product_card";
import TestimonialCard from "../components/cards/testimonial_card";
import Heading from "../components/heading";
import Partners from "../components/partners";
import { useFetchCategories, useFetchProducts } from "../hooks/hooks";

const Shop = () => {
	const { data } = useFetchCategories();
	const productsQueryObj = useFetchProducts();
	const displayData = [
		{
			category: "TShirts/Tops",
			collection: "Summer Value Pack",
			tags: ["cool", "colorful", "comfy"],
			imageUrl: require("../assets/hero-image-one-transparent.png"),
		},
		{
			category: "Sweaters/Tops",
			collection: "Fall Travel Wardrobe",
			tags: ["cool", "colorful", "thick"],
			imageUrl: require("../assets/hero-image-two-transparent.png"),
		},
	];
	const [currentDisplayData, setDisplayData] = useState({
		category: "TShirts/Tops",
		collection: "Summer Value Pack",
		tags: ["cool", "colorful", "comfy"],
		imageUrl: require("../assets/hero-image-one-transparent.png"),
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
								{currentDisplayData.tags.join(" / ")}
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
									? "bg-white"
									: "bg-white/60"
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
									? "bg-white/60"
									: "bg-white"
							} rounded-r-full`}
						></button>
					</div>
				</div>
			</section>
			<section className="py-8 px-5 sm:px-8 lg:px-16 flex flex-col gap-8">
				<section>
					<div className="flex flex-col sm:flex-row items-center justify-end gap-4">
						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://tinyurl.com/3ru3b8tv"
							actionType="link"
							description="High Coziness"
							discountText="up to 50% off"
							textPosition="right"
							title="Low Price"
						/>
						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://tinyurl.com/5j5dart7"
							actionType="link"
							description="Breezy Summer Style"
							discountText="up to 50% off"
							textPosition="right"
							title="Low Price"
						/>
					</div>
				</section>
				<section>
					<Heading text="New Arrivals" />
					<div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
						{data?.data?.slice(0, 6).map((cat, key) => {
							return (
								<CategoryCard
									key={key}
									title={cat.title}
									imageUrl={cat.image}
									actionText="Explore Now!"
								/>
							);
						})}
					</div>
				</section>
				<section className="flex flex-col gap-4">
					<Heading text="Big Saving Zone" />
					<div className="flex flex-col sm:flex-row items-center justify-end gap-4">
						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://tinyurl.com/3ru3b8tv"
							actionType="button"
							description="High Coziness"
							discountText="up to 50% off"
							textPosition="right"
							title="Low Price"
						/>

						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://tinyurl.com/5j5dart7"
							actionType="button"
							description="High Coziness"
							discountText="up to 50% off"
							textPosition="right"
							title="Low Price"
						/>
						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://tinyurl.com/35d3fsux"
							actionType="button"
							description="High Coziness"
							discountText="up to 50% off"
							textPosition="right"
							title="Low Price"
						/>
					</div>
					<div className="flex flex-col sm:flex-row items-center justify-end gap-4">
						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://tinyurl.com/2774nzcs"
							actionType="button"
							description="High Coziness"
							discountText="up to 50% off"
							textPosition="left"
							title="Low Price"
						/>
						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://shorturl.at/dkzOT"
							actionType="button"
							description="High Coziness"
							discountText="up to 50% off"
							textPosition="left"
							title="Low Price"
						/>
					</div>
				</section>
				<section>
					<div className="flex flex-col sm:flex-row overflow-hidden rounded-xl">
						<div className="relative bg-cover bg-center w-full aspect-square sm:w-1/2 sm:aspect-auto  min-h-full bg-black/50 text-white flex flex-col justify-center p-8 sm:p-10 md:p-16">
							<img
								src="https://tinyurl.com/297dfp8n"
								alt=""
								className="absolute top-0 w-full left-0 h-full [zoom:_60%] -z-10 object-cover object-center"
							/>
							<div>
								<h2 className="uppercase text-3xl font-[100] tracking-widest">
									we made your everyday fashion better
								</h2>
								<p className="text-xl font-extralight py-2">
									In our jouney to improve everyday fashion,
									euphoria presents EVERYDAY wear range -
									Comfortable & Affordable fashion 24/7
								</p>
								<div className="py-5">
									<button className="bg-transparent border border-white py-1.5 px-5 rounded-md bg-white text-gray-800 hover:bg-gray-100 max-w-fit">
										Shop Now
									</button>
								</div>
							</div>
						</div>

						<img
							src="https://tinyurl.com/58mh9drc"
							alt=""
							className="object-cover object-top w-full aspect-square sm:w-1/2 sm:h-auto"
						/>
					</div>
				</section>
				<section>
					<Heading text="Categories for Men" />
					<div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
						{data?.data
							?.filter((cat) => cat.title.toLowerCase() === "men")
							.map((cat, key) => (
								<CategoryCard
									imageUrl={cat.image}
									title={cat.title}
									key={key}
								/>
							))}
					</div>
				</section>
				<section>
					<Heading text="Categories for Women" />
					<div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
						{data?.data
							?.filter(
								(cat) => cat.title.toLowerCase() === "women"
							)
							.map((cat, key) => (
								<CategoryCard
									imageUrl={cat.image}
									title={cat.title}
									key={key}
								/>
							))}
					</div>
				</section>

				<Partners />

				<section>
					<Heading text="In the Limelight" />
					<div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
						{productsQueryObj.data?.data
							.slice(0, 8)
							.map((prd, key) => (
								<ProductCard
									key={key}
									imageUrl={prd.images[0]}
									title={prd.title}
									price={prd.price}
									brand={"Modern Dude"}
									onLiked={() => {}}
									onDisliked={() => {}}
								/>
							))}
					</div>
				</section>
				<section>
					<Heading text="Feedback" />
					<div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
					</div>
				</section>
			</section>
		</div>
	);
};

export default Shop;
