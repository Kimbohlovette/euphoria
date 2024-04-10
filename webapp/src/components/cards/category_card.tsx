import { NavLink } from "react-router-dom";

interface Props {
	imageUrl: string;
	actionText?: string;
	title: string;
}
const CategoryCard = ({ imageUrl, actionText, title }: Props) => {
	return (
		<div className="overflow-hidden">
			<img
				className="w-full sm:aspect-square h-96 object-cover rounded-lg"
				src={imageUrl}
				alt=""
			/>
			<div className="mt-2">
				<h3 className="font-medium text-gray-800 text-lg">{title}</h3>
				{actionText && (
					<NavLink
						to={`/products?cat=${title}`}
						className="text-gray-600 text-sm"
					>
						{actionText}
					</NavLink>
				)}
			</div>
		</div>
	);
};

export default CategoryCard;
