import Star from "../star";

const TestimonialCard = () => {
	return (
		<div className="border p-4 rounded-md min-h-80">
			<div className="flex justify-between items-start">
				<div>
					<img
						src={require("../../assets/friends.jpeg")}
						alt=""
						className="h-14 object-center object-cover rounded-sm aspect-square"
					/>
					<h2 className="font-[50] text-lg text-gray-600 mt-2">
						Floyd Miles
					</h2>
				</div>
				<div className="flex items-center justify-center gap-2">
					{Array(4)
						.fill(2)
						.map((_, key) => (
							<Star
								key={key}
								size={16}
								isHalf={false}
								color="orange"
							/>
						))}
					<Star size={16} isHalf={true} color="orange" />
				</div>
			</div>
			<p className="py-2 text-gray-600 text-sm font-light">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
				asperiores. Sapiente sunt blanditiis sint laboriosam sit nihil
				voluptatibus laudantium necessitatibus corporis, magnam neque
				ipsa officiis vero ipsum maiores nobis aliquam.
			</p>
		</div>
	);
};

export default TestimonialCard;
