import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Heading from "../components/heading";
import CategoryCardWithContent from "../components/cards/category_card_with_content";
import CategoryCard from "../components/cards/category_card";
import ProductCard from "../components/cards/product_card";
import Partners from "../components/partners";

const Shop = () => {
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
							backgroundImage="https://s3-alpha-sig.figma.com/img/cc0b/4fba/76b046b1f4fe7dfb452989b94ab6881a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IBuKeRuYvcSln6gZynJ58XhVFO5qhcMo-WnAnM9aHX-6wWOutnEoeSzfkYvj0QA3BaKmu8JsDcZevfH-R~RS3D8hA1wEwbT6TMbmcVV3K1-bc7uV9i5G1~mv9ZHvTVE7zgBmeE0THY98v~QFeICjGbhME6s05DlqFUkAT7jmw11etV9W4ng~FoVl3tvbTGbPPOB7I-WlbZYdqv2MC~dU0xj4jdFX1Le2WWmW0uyA8D-HyoR~7~hKzNrBRpyfDxaWR88yMNn-jByLEgTXlp2Fhz2oSZYC5Ak-crCzZrm~hf3dO-GycllyGOuHvGoCASXyCJiIfaXGhC~KHqJwwAmLoQ__"
							actionType="button"
							description="High Coziness"
							discountText="up to 50% off"
							textPosition="right"
							title="Low Price"
						/>
						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://s3-alpha-sig.figma.com/img/c669/98e8/95ab98d5b65890f4130278ba5e8e7593?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGDCHkvA3eTGNeEGPOu4wm8vALl41tLBGJGj9QPd4XM7PaTTncn2tNeOI6k6Hn6yqS4DfRVXekG5m-QByOQHC7HKG5vSlFTAVZ9aNJOfoswKdT0z4UJqgFGPrt68xcnotHtsC6xCN5Z14I-qGMBF-LL5biZ9PGl8ChJ-WyTLmzP2d6a5RQSiDZtRANmqOhgCRMm8Ky7nh3jFXYjZG5FMJ-O5dWBchf3Xj5eRJ~2jUKIDNgQ7l4b7ydWzAxOM~MzcfzAuv2r8cNK8e-MZUx4E~LS2XLrRlFw3bj~p6dweUSDdtysPWNqNMny2iwvbIqbc4BcH7cz6Ppzws1dpo9xf0g__"
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
						<CategoryCard
							imageUrl="https://s3-alpha-sig.figma.com/img/4dfc/8cb2/9eb86a3efe124ecd15816859f3ea4e88?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=naCmB2Ldnt~9qrIpcWglKvyZf2Ed7kgdkgsGKlv6oIu4zaNIWaeTS2ziyHvE6RfA0mWP~wUGFcNQp8RohQ1VethM6Wie3dkFdYB5FxcXLBaQ81r7JKxVYU8RCCUm25DQ8jjW7MkyxmrmSwrQwy6yB2hH~Kqzt2fQNeRGCoIVBtWBsmtiaIbH4MPtTFCnEnyktTyqkhnkN0~w3BM6x306u~MjFUsgaqToq~ayIJt9h27presSsmucZRdOm8LNt3LGuTsEd4DqlyKzCpgVckA9BE2P2g7DINVmifVXqiRGyu4fzTlRI7HoK2V5BfclmLNL6FzoGuLYMPU0AU2P2b2syA__"
							title="Boxers"
							actionText="Explore Now!"
						/>
						<CategoryCard
							title="Coats and Parkers"
							imageUrl="https://s3-alpha-sig.figma.com/img/3329/758c/e2776638d2390797575fe0652468591a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHErEaUj4CxfpLQ9nnCQHwjxjIcEtSuaGC8KgGfp3ZZQ5rGjMVu9S5AB-xmdpvCftzBWaeAP-N12OGwEIWwZ4rPcPk2rDxDuy-VUNTa3Z1TOAd5VSK97PjKmisN1WG2MJ0L4hNv9utumDe7rrbUetSu5Y46UQOerlEw72nhdB8bkPPI8dgJ~s3uBuVniFsUqN-towlzZ7F~37L6dzyP3a1drOtRkLqV-Bpf16vVgxY33Q2W2iLqHqfBW8WU~qA~H~T3eC~XiAAWdFtTllWlGsDI5lhgckcJUzI~1em3wFum4UQLZuH1-5PuMKtFwyANtgO11VtgPQW~bIbtu1nVqXw__"
						/>
						<CategoryCard
							title="Tees and Tshirts"
							imageUrl="https://s3-alpha-sig.figma.com/img/1d49/8085/cd056686e79c2dee4de64329271d3aac?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TLNhWWxV8bB~xVZDPS5OujeCJMbtwy3tbJi-c2Q-kv8v8HlKXNAUXbvNMlWdtAwBLQPsy1fWazXp1w~XyLUx-VLlSbFRNa1nYvoWph269I62Eq-XXkQR7kSY-bjaI~ycPwcNKpUquBfoDb0mcQs6ALT3uAhnuM14zekyqv8IFjG1~r-egaaDVo8bbS-lkgExW0LH7QTULVqTaIHTM0MLPDULQJnR0Q8GI-6xa1E5TrZX8~E9CXtiBGO~IInXKome32ibC1QIQWbYqMK6KlIDYBgOu0BVC25DdjnZV6kjWQw96Jg79ofiwt5FZxTaup-mqdNaCbp8vrHgT~F2d~FCHg__"
						/>
						<CategoryCard
							imageUrl="https://s3-alpha-sig.figma.com/img/4dfc/8cb2/9eb86a3efe124ecd15816859f3ea4e88?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=naCmB2Ldnt~9qrIpcWglKvyZf2Ed7kgdkgsGKlv6oIu4zaNIWaeTS2ziyHvE6RfA0mWP~wUGFcNQp8RohQ1VethM6Wie3dkFdYB5FxcXLBaQ81r7JKxVYU8RCCUm25DQ8jjW7MkyxmrmSwrQwy6yB2hH~Kqzt2fQNeRGCoIVBtWBsmtiaIbH4MPtTFCnEnyktTyqkhnkN0~w3BM6x306u~MjFUsgaqToq~ayIJt9h27presSsmucZRdOm8LNt3LGuTsEd4DqlyKzCpgVckA9BE2P2g7DINVmifVXqiRGyu4fzTlRI7HoK2V5BfclmLNL6FzoGuLYMPU0AU2P2b2syA__"
							title="Boxers"
						/>

						<CategoryCard
							title="Huddies and sweetshirts"
							imageUrl="https://s3-alpha-sig.figma.com/img/0a94/2bfb/32d058cabd76d21b35a037c539dd1710?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lerEza2jCdP4d-pmMP-fcY6CtObFuAYlrcnIAXRhLTB7wlCb4dVmjtyWPbXRtByZctGIFUiCNB8R57mtbv6w2hpFosEWxfl25iN4Py9srlXxlrpJE0TPAz6X0OY4UemDdvc6BI6DspbwOrJxt3RfxzP2TUaEVoIWuCxBejKI9DnrzpzIU5t4-wS8GlFyR2Fj7nBnkkvvZSAKpa4Qzkp4ZVOjZk83Z1jrCwpeWVHOcUNTO3AQmWWygvxjE7A29strdy05aBmpPF2J7TzjRbd5k25w8CpMs41Oo0JrTn9PdP9gsrdCN~PMJh2yJ0OK~pAUCmJKe-k4Io9dX5OBTMlI5A__"
							actionText="Explore Now!"
						/>
						<CategoryCard
							title="Coats and Parkers"
							imageUrl="https://s3-alpha-sig.figma.com/img/3329/758c/e2776638d2390797575fe0652468591a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHErEaUj4CxfpLQ9nnCQHwjxjIcEtSuaGC8KgGfp3ZZQ5rGjMVu9S5AB-xmdpvCftzBWaeAP-N12OGwEIWwZ4rPcPk2rDxDuy-VUNTa3Z1TOAd5VSK97PjKmisN1WG2MJ0L4hNv9utumDe7rrbUetSu5Y46UQOerlEw72nhdB8bkPPI8dgJ~s3uBuVniFsUqN-towlzZ7F~37L6dzyP3a1drOtRkLqV-Bpf16vVgxY33Q2W2iLqHqfBW8WU~qA~H~T3eC~XiAAWdFtTllWlGsDI5lhgckcJUzI~1em3wFum4UQLZuH1-5PuMKtFwyANtgO11VtgPQW~bIbtu1nVqXw__"
							actionText="Explore Now!"
						/>
					</div>
				</section>
				<section className="flex flex-col gap-4">
					<Heading text="Big Saving Zone" />
					<div className="flex flex-col sm:flex-row items-center justify-end gap-4">
						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://s3-alpha-sig.figma.com/img/cc0b/4fba/76b046b1f4fe7dfb452989b94ab6881a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IBuKeRuYvcSln6gZynJ58XhVFO5qhcMo-WnAnM9aHX-6wWOutnEoeSzfkYvj0QA3BaKmu8JsDcZevfH-R~RS3D8hA1wEwbT6TMbmcVV3K1-bc7uV9i5G1~mv9ZHvTVE7zgBmeE0THY98v~QFeICjGbhME6s05DlqFUkAT7jmw11etV9W4ng~FoVl3tvbTGbPPOB7I-WlbZYdqv2MC~dU0xj4jdFX1Le2WWmW0uyA8D-HyoR~7~hKzNrBRpyfDxaWR88yMNn-jByLEgTXlp2Fhz2oSZYC5Ak-crCzZrm~hf3dO-GycllyGOuHvGoCASXyCJiIfaXGhC~KHqJwwAmLoQ__"
							actionType="button"
							description="High Coziness"
							discountText="up to 50% off"
							textPosition="right"
							title="Low Price"
						/>

						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://s3-alpha-sig.figma.com/img/c669/98e8/95ab98d5b65890f4130278ba5e8e7593?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGDCHkvA3eTGNeEGPOu4wm8vALl41tLBGJGj9QPd4XM7PaTTncn2tNeOI6k6Hn6yqS4DfRVXekG5m-QByOQHC7HKG5vSlFTAVZ9aNJOfoswKdT0z4UJqgFGPrt68xcnotHtsC6xCN5Z14I-qGMBF-LL5biZ9PGl8ChJ-WyTLmzP2d6a5RQSiDZtRANmqOhgCRMm8Ky7nh3jFXYjZG5FMJ-O5dWBchf3Xj5eRJ~2jUKIDNgQ7l4b7ydWzAxOM~MzcfzAuv2r8cNK8e-MZUx4E~LS2XLrRlFw3bj~p6dweUSDdtysPWNqNMny2iwvbIqbc4BcH7cz6Ppzws1dpo9xf0g__"
							actionType="button"
							description="High Coziness"
							discountText="up to 50% off"
							textPosition="right"
							title="Low Price"
						/>
						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://s3-alpha-sig.figma.com/img/35ba/f6bd/7d29bb88d169abf43d9a0c5a4a067a9b?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KE4a7sW9yl7XWm14mFMH2T2kNns2CrBr3NBEVYxCMTMtv6dvzAr96YqIXFqxB39n1OEKZdq8Torq1r-VkY2Xv36Npm95-cquNwXndWtXYML0jvFbYghNC8VEhEJzZ4I1t9WZT96nVrPMsVii8NAg4Cr3LIKtC0sX96cTNd6H2KGuq6ikTv4UX30feVIl8yKAI7vT4iA5SgxSeXNdYWudkCzyJD3~hrFX2C8FxHdsQgtu2UTtEifDceICvwMrf1mDbd2y09uP19E0Vgz~mLtsVLZMU9p3qKNrKvokYwNbal1iLsoyJ-eKxoMPy~QSqJd638MEifuCe7FJShAlTn7qPw__"
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
							backgroundImage="https://s3-alpha-sig.figma.com/img/4cd3/e890/70d398f9eec93a9fd3b86cdb8d5cda03?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LfRV3D4uVRALJhDVbNHFaSvUHLmjjFvutg8~bKVVrN0qwjQMUeJmXU~Tvl~UpyI91tOeVW0Tp~CnJRaCZxam6Li-SDryRFtfZYI0Vq9uawn8DcIUQOiNftpIYehnmLeAhP7vC1I80dit3R1QJ8I1iGwTnzt3ZqYy9Mf5UzVk-SEECuV2H0688Iqn0k~LMsR6~n1wr2b4vYPohTcFdNB~MCHnjEd4~pmxhN3ciiOrn8hdnxW-9fUozIudZ0OVRfQ3mHqd~dKfTawSazCDJWIvyt-CeOkhiParuMInXqrU8fxxFfX8F~gilr58KgXvHVqVfI1fhw5zeWpwY9oMuD6Ikg__"
							actionType="button"
							description="High Coziness"
							discountText="up to 50% off"
							textPosition="left"
							title="Low Price"
						/>
						<CategoryCardWithContent
							actionText="Shop Now"
							backgroundImage="https://s3-alpha-sig.figma.com/img/0a94/2bfb/32d058cabd76d21b35a037c539dd1710?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lerEza2jCdP4d-pmMP-fcY6CtObFuAYlrcnIAXRhLTB7wlCb4dVmjtyWPbXRtByZctGIFUiCNB8R57mtbv6w2hpFosEWxfl25iN4Py9srlXxlrpJE0TPAz6X0OY4UemDdvc6BI6DspbwOrJxt3RfxzP2TUaEVoIWuCxBejKI9DnrzpzIU5t4-wS8GlFyR2Fj7nBnkkvvZSAKpa4Qzkp4ZVOjZk83Z1jrCwpeWVHOcUNTO3AQmWWygvxjE7A29strdy05aBmpPF2J7TzjRbd5k25w8CpMs41Oo0JrTn9PdP9gsrdCN~PMJh2yJ0OK~pAUCmJKe-k4Io9dX5OBTMlI5A__"
							actionType="button"
							description="High Coziness"
							discountText="up to 50% off"
							textPosition="left"
							title="Low Price"
						/>
					</div>
				</section>
				<section>
					<Heading text="Categories for Men" />
					<div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
						<CategoryCard
							title="Huddies and sweetshirts"
							imageUrl="https://s3-alpha-sig.figma.com/img/0a94/2bfb/32d058cabd76d21b35a037c539dd1710?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lerEza2jCdP4d-pmMP-fcY6CtObFuAYlrcnIAXRhLTB7wlCb4dVmjtyWPbXRtByZctGIFUiCNB8R57mtbv6w2hpFosEWxfl25iN4Py9srlXxlrpJE0TPAz6X0OY4UemDdvc6BI6DspbwOrJxt3RfxzP2TUaEVoIWuCxBejKI9DnrzpzIU5t4-wS8GlFyR2Fj7nBnkkvvZSAKpa4Qzkp4ZVOjZk83Z1jrCwpeWVHOcUNTO3AQmWWygvxjE7A29strdy05aBmpPF2J7TzjRbd5k25w8CpMs41Oo0JrTn9PdP9gsrdCN~PMJh2yJ0OK~pAUCmJKe-k4Io9dX5OBTMlI5A__"
						/>
						<CategoryCard
							title="Coats and Parkers"
							imageUrl="https://s3-alpha-sig.figma.com/img/3329/758c/e2776638d2390797575fe0652468591a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHErEaUj4CxfpLQ9nnCQHwjxjIcEtSuaGC8KgGfp3ZZQ5rGjMVu9S5AB-xmdpvCftzBWaeAP-N12OGwEIWwZ4rPcPk2rDxDuy-VUNTa3Z1TOAd5VSK97PjKmisN1WG2MJ0L4hNv9utumDe7rrbUetSu5Y46UQOerlEw72nhdB8bkPPI8dgJ~s3uBuVniFsUqN-towlzZ7F~37L6dzyP3a1drOtRkLqV-Bpf16vVgxY33Q2W2iLqHqfBW8WU~qA~H~T3eC~XiAAWdFtTllWlGsDI5lhgckcJUzI~1em3wFum4UQLZuH1-5PuMKtFwyANtgO11VtgPQW~bIbtu1nVqXw__"
						/>
						<CategoryCard
							title="Tees and Tshirts"
							imageUrl="https://s3-alpha-sig.figma.com/img/1d49/8085/cd056686e79c2dee4de64329271d3aac?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TLNhWWxV8bB~xVZDPS5OujeCJMbtwy3tbJi-c2Q-kv8v8HlKXNAUXbvNMlWdtAwBLQPsy1fWazXp1w~XyLUx-VLlSbFRNa1nYvoWph269I62Eq-XXkQR7kSY-bjaI~ycPwcNKpUquBfoDb0mcQs6ALT3uAhnuM14zekyqv8IFjG1~r-egaaDVo8bbS-lkgExW0LH7QTULVqTaIHTM0MLPDULQJnR0Q8GI-6xa1E5TrZX8~E9CXtiBGO~IInXKome32ibC1QIQWbYqMK6KlIDYBgOu0BVC25DdjnZV6kjWQw96Jg79ofiwt5FZxTaup-mqdNaCbp8vrHgT~F2d~FCHg__"
						/>
						<CategoryCard
							imageUrl="https://s3-alpha-sig.figma.com/img/4dfc/8cb2/9eb86a3efe124ecd15816859f3ea4e88?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=naCmB2Ldnt~9qrIpcWglKvyZf2Ed7kgdkgsGKlv6oIu4zaNIWaeTS2ziyHvE6RfA0mWP~wUGFcNQp8RohQ1VethM6Wie3dkFdYB5FxcXLBaQ81r7JKxVYU8RCCUm25DQ8jjW7MkyxmrmSwrQwy6yB2hH~Kqzt2fQNeRGCoIVBtWBsmtiaIbH4MPtTFCnEnyktTyqkhnkN0~w3BM6x306u~MjFUsgaqToq~ayIJt9h27presSsmucZRdOm8LNt3LGuTsEd4DqlyKzCpgVckA9BE2P2g7DINVmifVXqiRGyu4fzTlRI7HoK2V5BfclmLNL6FzoGuLYMPU0AU2P2b2syA__"
							title="Boxers"
						/>
					</div>
				</section>
				<section>
					<Heading text="Categories for Women" />
					<div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
						<CategoryCard
							title="Huddies and sweetshirts"
							imageUrl="https://s3-alpha-sig.figma.com/img/0a94/2bfb/32d058cabd76d21b35a037c539dd1710?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lerEza2jCdP4d-pmMP-fcY6CtObFuAYlrcnIAXRhLTB7wlCb4dVmjtyWPbXRtByZctGIFUiCNB8R57mtbv6w2hpFosEWxfl25iN4Py9srlXxlrpJE0TPAz6X0OY4UemDdvc6BI6DspbwOrJxt3RfxzP2TUaEVoIWuCxBejKI9DnrzpzIU5t4-wS8GlFyR2Fj7nBnkkvvZSAKpa4Qzkp4ZVOjZk83Z1jrCwpeWVHOcUNTO3AQmWWygvxjE7A29strdy05aBmpPF2J7TzjRbd5k25w8CpMs41Oo0JrTn9PdP9gsrdCN~PMJh2yJ0OK~pAUCmJKe-k4Io9dX5OBTMlI5A__"
						/>
						<CategoryCard
							title="Coats and Parkers"
							imageUrl="https://s3-alpha-sig.figma.com/img/3329/758c/e2776638d2390797575fe0652468591a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHErEaUj4CxfpLQ9nnCQHwjxjIcEtSuaGC8KgGfp3ZZQ5rGjMVu9S5AB-xmdpvCftzBWaeAP-N12OGwEIWwZ4rPcPk2rDxDuy-VUNTa3Z1TOAd5VSK97PjKmisN1WG2MJ0L4hNv9utumDe7rrbUetSu5Y46UQOerlEw72nhdB8bkPPI8dgJ~s3uBuVniFsUqN-towlzZ7F~37L6dzyP3a1drOtRkLqV-Bpf16vVgxY33Q2W2iLqHqfBW8WU~qA~H~T3eC~XiAAWdFtTllWlGsDI5lhgckcJUzI~1em3wFum4UQLZuH1-5PuMKtFwyANtgO11VtgPQW~bIbtu1nVqXw__"
						/>
						<CategoryCard
							title="Tees and Tshirts"
							imageUrl="https://s3-alpha-sig.figma.com/img/1d49/8085/cd056686e79c2dee4de64329271d3aac?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TLNhWWxV8bB~xVZDPS5OujeCJMbtwy3tbJi-c2Q-kv8v8HlKXNAUXbvNMlWdtAwBLQPsy1fWazXp1w~XyLUx-VLlSbFRNa1nYvoWph269I62Eq-XXkQR7kSY-bjaI~ycPwcNKpUquBfoDb0mcQs6ALT3uAhnuM14zekyqv8IFjG1~r-egaaDVo8bbS-lkgExW0LH7QTULVqTaIHTM0MLPDULQJnR0Q8GI-6xa1E5TrZX8~E9CXtiBGO~IInXKome32ibC1QIQWbYqMK6KlIDYBgOu0BVC25DdjnZV6kjWQw96Jg79ofiwt5FZxTaup-mqdNaCbp8vrHgT~F2d~FCHg__"
						/>
						<CategoryCard
							imageUrl="https://s3-alpha-sig.figma.com/img/4dfc/8cb2/9eb86a3efe124ecd15816859f3ea4e88?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=naCmB2Ldnt~9qrIpcWglKvyZf2Ed7kgdkgsGKlv6oIu4zaNIWaeTS2ziyHvE6RfA0mWP~wUGFcNQp8RohQ1VethM6Wie3dkFdYB5FxcXLBaQ81r7JKxVYU8RCCUm25DQ8jjW7MkyxmrmSwrQwy6yB2hH~Kqzt2fQNeRGCoIVBtWBsmtiaIbH4MPtTFCnEnyktTyqkhnkN0~w3BM6x306u~MjFUsgaqToq~ayIJt9h27presSsmucZRdOm8LNt3LGuTsEd4DqlyKzCpgVckA9BE2P2g7DINVmifVXqiRGyu4fzTlRI7HoK2V5BfclmLNL6FzoGuLYMPU0AU2P2b2syA__"
							title="Boxers"
						/>
						<CategoryCard
							title="Coats and Parkers"
							imageUrl="https://s3-alpha-sig.figma.com/img/3329/758c/e2776638d2390797575fe0652468591a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHErEaUj4CxfpLQ9nnCQHwjxjIcEtSuaGC8KgGfp3ZZQ5rGjMVu9S5AB-xmdpvCftzBWaeAP-N12OGwEIWwZ4rPcPk2rDxDuy-VUNTa3Z1TOAd5VSK97PjKmisN1WG2MJ0L4hNv9utumDe7rrbUetSu5Y46UQOerlEw72nhdB8bkPPI8dgJ~s3uBuVniFsUqN-towlzZ7F~37L6dzyP3a1drOtRkLqV-Bpf16vVgxY33Q2W2iLqHqfBW8WU~qA~H~T3eC~XiAAWdFtTllWlGsDI5lhgckcJUzI~1em3wFum4UQLZuH1-5PuMKtFwyANtgO11VtgPQW~bIbtu1nVqXw__"
						/>
						<CategoryCard
							title="Tees and Tshirts"
							imageUrl="https://s3-alpha-sig.figma.com/img/1d49/8085/cd056686e79c2dee4de64329271d3aac?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TLNhWWxV8bB~xVZDPS5OujeCJMbtwy3tbJi-c2Q-kv8v8HlKXNAUXbvNMlWdtAwBLQPsy1fWazXp1w~XyLUx-VLlSbFRNa1nYvoWph269I62Eq-XXkQR7kSY-bjaI~ycPwcNKpUquBfoDb0mcQs6ALT3uAhnuM14zekyqv8IFjG1~r-egaaDVo8bbS-lkgExW0LH7QTULVqTaIHTM0MLPDULQJnR0Q8GI-6xa1E5TrZX8~E9CXtiBGO~IInXKome32ibC1QIQWbYqMK6KlIDYBgOu0BVC25DdjnZV6kjWQw96Jg79ofiwt5FZxTaup-mqdNaCbp8vrHgT~F2d~FCHg__"
						/>
						<CategoryCard
							imageUrl="https://s3-alpha-sig.figma.com/img/4dfc/8cb2/9eb86a3efe124ecd15816859f3ea4e88?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=naCmB2Ldnt~9qrIpcWglKvyZf2Ed7kgdkgsGKlv6oIu4zaNIWaeTS2ziyHvE6RfA0mWP~wUGFcNQp8RohQ1VethM6Wie3dkFdYB5FxcXLBaQ81r7JKxVYU8RCCUm25DQ8jjW7MkyxmrmSwrQwy6yB2hH~Kqzt2fQNeRGCoIVBtWBsmtiaIbH4MPtTFCnEnyktTyqkhnkN0~w3BM6x306u~MjFUsgaqToq~ayIJt9h27presSsmucZRdOm8LNt3LGuTsEd4DqlyKzCpgVckA9BE2P2g7DINVmifVXqiRGyu4fzTlRI7HoK2V5BfclmLNL6FzoGuLYMPU0AU2P2b2syA__"
							title="Boxers"
						/>

						<CategoryCard
							title="Huddies and sweetshirts"
							imageUrl="https://s3-alpha-sig.figma.com/img/0a94/2bfb/32d058cabd76d21b35a037c539dd1710?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lerEza2jCdP4d-pmMP-fcY6CtObFuAYlrcnIAXRhLTB7wlCb4dVmjtyWPbXRtByZctGIFUiCNB8R57mtbv6w2hpFosEWxfl25iN4Py9srlXxlrpJE0TPAz6X0OY4UemDdvc6BI6DspbwOrJxt3RfxzP2TUaEVoIWuCxBejKI9DnrzpzIU5t4-wS8GlFyR2Fj7nBnkkvvZSAKpa4Qzkp4ZVOjZk83Z1jrCwpeWVHOcUNTO3AQmWWygvxjE7A29strdy05aBmpPF2J7TzjRbd5k25w8CpMs41Oo0JrTn9PdP9gsrdCN~PMJh2yJ0OK~pAUCmJKe-k4Io9dX5OBTMlI5A__"
						/>
					</div>
				</section>

				<Partners />

				<section>
					<Heading text="In the Limelight" />
					<div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
						<ProductCard
							imageUrl="https://s3-alpha-sig.figma.com/img/0a94/2bfb/32d058cabd76d21b35a037c539dd1710?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lerEza2jCdP4d-pmMP-fcY6CtObFuAYlrcnIAXRhLTB7wlCb4dVmjtyWPbXRtByZctGIFUiCNB8R57mtbv6w2hpFosEWxfl25iN4Py9srlXxlrpJE0TPAz6X0OY4UemDdvc6BI6DspbwOrJxt3RfxzP2TUaEVoIWuCxBejKI9DnrzpzIU5t4-wS8GlFyR2Fj7nBnkkvvZSAKpa4Qzkp4ZVOjZk83Z1jrCwpeWVHOcUNTO3AQmWWygvxjE7A29strdy05aBmpPF2J7TzjRbd5k25w8CpMs41Oo0JrTn9PdP9gsrdCN~PMJh2yJ0OK~pAUCmJKe-k4Io9dX5OBTMlI5A__"
							title="Boxers"
							price="$100"
							brand="Nike"
							onLiked={() => {}}
							onDisliked={() => {}}
						/>
						<ProductCard
							imageUrl="https://s3-alpha-sig.figma.com/img/0a94/2bfb/32d058cabd76d21b35a037c539dd1710?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lerEza2jCdP4d-pmMP-fcY6CtObFuAYlrcnIAXRhLTB7wlCb4dVmjtyWPbXRtByZctGIFUiCNB8R57mtbv6w2hpFosEWxfl25iN4Py9srlXxlrpJE0TPAz6X0OY4UemDdvc6BI6DspbwOrJxt3RfxzP2TUaEVoIWuCxBejKI9DnrzpzIU5t4-wS8GlFyR2Fj7nBnkkvvZSAKpa4Qzkp4ZVOjZk83Z1jrCwpeWVHOcUNTO3AQmWWygvxjE7A29strdy05aBmpPF2J7TzjRbd5k25w8CpMs41Oo0JrTn9PdP9gsrdCN~PMJh2yJ0OK~pAUCmJKe-k4Io9dX5OBTMlI5A__"
							title="Boxers"
							price="$100"
							brand="Nike"
							onLiked={() => {}}
							onDisliked={() => {}}
						/>
						<ProductCard
							imageUrl="https://s3-alpha-sig.figma.com/img/0a94/2bfb/32d058cabd76d21b35a037c539dd1710?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lerEza2jCdP4d-pmMP-fcY6CtObFuAYlrcnIAXRhLTB7wlCb4dVmjtyWPbXRtByZctGIFUiCNB8R57mtbv6w2hpFosEWxfl25iN4Py9srlXxlrpJE0TPAz6X0OY4UemDdvc6BI6DspbwOrJxt3RfxzP2TUaEVoIWuCxBejKI9DnrzpzIU5t4-wS8GlFyR2Fj7nBnkkvvZSAKpa4Qzkp4ZVOjZk83Z1jrCwpeWVHOcUNTO3AQmWWygvxjE7A29strdy05aBmpPF2J7TzjRbd5k25w8CpMs41Oo0JrTn9PdP9gsrdCN~PMJh2yJ0OK~pAUCmJKe-k4Io9dX5OBTMlI5A__"
							title="Boxers"
							price="$100"
							brand="Nike"
							onLiked={() => {}}
							onDisliked={() => {}}
						/>
						<ProductCard
							imageUrl="https://s3-alpha-sig.figma.com/img/0a94/2bfb/32d058cabd76d21b35a037c539dd1710?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lerEza2jCdP4d-pmMP-fcY6CtObFuAYlrcnIAXRhLTB7wlCb4dVmjtyWPbXRtByZctGIFUiCNB8R57mtbv6w2hpFosEWxfl25iN4Py9srlXxlrpJE0TPAz6X0OY4UemDdvc6BI6DspbwOrJxt3RfxzP2TUaEVoIWuCxBejKI9DnrzpzIU5t4-wS8GlFyR2Fj7nBnkkvvZSAKpa4Qzkp4ZVOjZk83Z1jrCwpeWVHOcUNTO3AQmWWygvxjE7A29strdy05aBmpPF2J7TzjRbd5k25w8CpMs41Oo0JrTn9PdP9gsrdCN~PMJh2yJ0OK~pAUCmJKe-k4Io9dX5OBTMlI5A__"
							title="Boxers"
							price="$100"
							brand="Nike"
							onLiked={() => {}}
							onDisliked={() => {}}
						/>
					</div>
				</section>
				<section>
					<Heading text="Feedback" />
				</section>
			</section>
		</div>
	);
};

export default Shop;
