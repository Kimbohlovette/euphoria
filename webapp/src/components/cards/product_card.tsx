interface Props {
	imageUrl: string;
	title: string;
	price: number | string;
	brand: string;
	liked?: boolean | false;
	onLiked: () => void;
	onDisliked: () => void;
}
const ProductCard = ({
	imageUrl,
	title,
	liked,
	onLiked,
	onDisliked,
	brand,
	price,
}: Props) => {
	return (
		<div className="overflow-hidden">
			<div></div>
			<img
				className="w-full sm:aspect-square h-96 object-cover rounded-lg"
				src={imageUrl}
				alt=""
			/>
			<div className="mt-5 flex items-start justify-between">
				<div>
					<h3 className="font-medium text-gray-800">{title}</h3>
					<p className="py-1 text-gray-500">{`${brand}'s Brand`}</p>
				</div>
				<span className="text-lg font-semibold text-gray-800 px-4 rounded-xl py-1.5 bg-gray-100">
					{price}
				</span>
			</div>
		</div>
	);
};

export default ProductCard;
