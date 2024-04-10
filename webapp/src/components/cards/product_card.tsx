import { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

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
	const [like, setLike] = useState(liked);
	useEffect(() => {
		if (liked) {
			onLiked();
		} else {
			onDisliked();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [like]);
	return (
		<div className="overflow-hidden relative">
			<button
				onClick={() => setLike((s) => !s)}
				className="grid place-items-center p-3 rounded-full bg-white absolute top-5 right-5 text-gray-600"
			>
				{like ? <BsHeart /> : <BsHeartFill />}
			</button>
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
