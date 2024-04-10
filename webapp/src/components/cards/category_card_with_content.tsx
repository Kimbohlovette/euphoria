import { HiArrowDown } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

interface Props {
	limitedStock?: boolean;
	title: string;
	description: string;
	backgroundImage: string;
	discountText: string;
	actionText: string;
	actionType: "button" | "link";
	textPosition: "left" | "right";
}
const CategoryCardWithContent = ({
	backgroundImage,
	textPosition,
	limitedStock,
	title,
	description,
	discountText,
	actionText,
	actionType,
}: Props) => {
	return (
		<div
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}
			className={`p-5 min-h-96 overflow-hidden rounded-xl flex *:flex-1 bg-cover bg-no-repeat w-full max-w-screen-md gap-5  bg-center items-center  ${
				textPosition === "right"
					? "object-right flex-end text-right"
					: "ojbect-left text-left flex-row-reverse"
			}`}
		>
			<div></div>
			<div className={`text-white flex flex-col gap-2 p-5`}>
				<h1 className="text-xl font-semibold">Low Price</h1>
				<h2 className="text-4xl font-[50]">{description}</h2>
				<span className="text-lg font-[100] uppercase">
					{discountText}
				</span>
				{actionType === "button" ? (
					<div
						className={`flex flex-col gap-4 items-center ${
							textPosition === "left"
								? "place-self-start"
								: "place-self-end"
						} max-w-fit`}
					>
						<div className="animate-bounce duration-75 delay-1000">
							<HiArrowDown />
						</div>
						<button className="bg-transparent border border-white py-1.5 px-5 rounded-md hover:bg-white hover:text-gray-800 max-w-fit">
							{actionText}
						</button>
					</div>
				) : (
					<NavLink
						to={`products?cat=${title}`}
						className="underline underline-offset-4"
					>
						{actionText}
					</NavLink>
				)}
			</div>
		</div>
	);
};

export default CategoryCardWithContent;
