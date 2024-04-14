import { useState } from 'react';
import { CiMonitor } from 'react-icons/ci';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { IoArrowDownSharp, IoArrowUpSharp } from 'react-icons/io5';
import { LuPlus, LuUserCheck, LuUsers2 } from 'react-icons/lu';
import Dropdown from '../components/dropdown';
import CreateProductModal from '../components/modals/create_product_modal';
import SearchInput from '../components/search_input_control';
import { useFetchProducts } from "../hooks/hooks";
import { Category } from "../types";

const Products = () => {
	const [showCreateProductModal, setShowCreateProductModal] = useState(false);
	const { data, isLoading } = useFetchProducts();
	return (
		<>
			{showCreateProductModal && (
				<CreateProductModal
					onClose={() => setShowCreateProductModal(false)}
				/>
			)}
			<div className="flex flex-col gap-8">
				<section className="p-6 bg-white rounded-3xl grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] lg:divide-x *:px-4 gap-8">
					<div>
						<SummaryCard
							title="Products"
							count={3484}
							percentageIncrease={26}
							icon={<LuUsers2 size={30} />}
						/>
					</div>
					<div>
						<SummaryCard
							title="Sales per product"
							count={1360}
							percentageIncrease={-15}
							icon={<LuUserCheck size={30} />}
						/>
					</div>
					<div>
						<SummaryCard
							icon={<CiMonitor size={30} />}
							title="Product Reviews"
							count={195}
						/>
					</div>
				</section>
				<section className="p-6 bg-white rounded-3xl">
					<header className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
						<div>
							<h1 className="text-gray-800 font-semibold text-2xl">
								Products
							</h1>
							<p className="text-green-500 py-2 font-light">
								Active Members
							</p>
						</div>
						<div className="flex items-center flex-wrap *:w-full gap-4 *:sm:w-fit">
							<SearchInput
								onSubmit={() => {}}
								onReset={() => {}}
								value=""
								placeholder="Search"
								onChange={() => {}}
								containerStyle={{ backgroundColor: "#f9fafb" }}
							/>
							<Dropdown
								data={[]}
								onSelect={() => {}}
								placeholder="Sort by:"
								containerStyle={{ backgroundColor: "#f9fafb" }}
							/>
							<div>
								<button
									onClick={(e) => {
										e.stopPropagation();
										setShowCreateProductModal(true);
									}}
									className="text-white bg-green-600 py-1.5 px-2 rounded-lg flex items-center justify-center font-medium"
								>
									<LuPlus strokeWidth={3} /> New
								</button>
							</div>
						</div>
					</header>
					<div className="py-5">
						{isLoading ? (
							<div className="flex items-center justify-center">
								<IoArrowDownSharp size={100} />
							</div>
						) : (
							<table className="w-full">
								<thead>
									<tr className="*:px-4 *:py-3 text-left text-sm text-gray-500 *:font-light">
										<th>Product Name</th>
										<th className="hidden md:table-cell">
											Desription
										</th>
										<th>Category</th>
										<th className="hidden sm:table-cell">
											Image
										</th>
										<th>Country</th>
										<th className="flex justify-end sm:justify-start">
											Status
										</th>
									</tr>
								</thead>
								<tbody className="divide-y">
									{data?.data.map((prd, key) => (
										<CategoryRow
											country={"Cameroon"}
											category={
												(prd.category as Category).title
											}
											description={prd.description}
											imageUrl={prd.images[0]}
											name={prd.title}
											status={
												Math.random() < 0.5
													? "inactive"
													: "active"
											}
											key={key}
										/>
									))}
								</tbody>
							</table>
						)}
					</div>
					<footer>
						<div className="flex flex-wrap-reverse gap-5 lg:justify-between">
							<p className="text-sm text-gray-500">
								Showing data {1} to {8} of {256}k entries
							</p>
							<div className="flex items-center gap-2 [&_button]:px-3 [&_button]:py-1.5 [&_button]:bg-gray-100 [&_button]:rounded-md text-xs">
								<button>
									<GoChevronLeft />
								</button>
								<div className="hidden sm:flex gap-1">
									<button>1</button>
									<button>2</button>
									<button>3</button>
									<button>4</button>

									<div className="self-end px-4">...</div>
									<button>40</button>
								</div>
								<button>
									<GoChevronRight />
								</button>
							</div>
						</div>
					</footer>
				</section>
			</div>
		</>
	);
};

export default Products;

interface SummaryProps {
	title: string;
	count: number;
	icon: JSX.Element;
	percentageIncrease?: number;
}
const SummaryCard = ({
	title,
	count,
	icon,
	percentageIncrease,
}: SummaryProps) => {
	return (
		<div className="flex items-center gap-3">
			<div className="grid place-items-center h-20 aspect-square rounded-full bg-green-100 text-green-500">
				{icon}
			</div>
			<div>
				<h2 className="text-gray-400 font-light text-sm">{title}</h2>
				<p className="text-gray-700 font-bold text-3xl">{count}</p>
				{percentageIncrease && (
					<div className="flex items-center gap-1.5">
						<div
							className={`flex items-center ${
								(percentageIncrease ?? 0) < 1
									? 'text-red-500'
									: 'text-green-500'
							} font-bold`}
						>
							{(percentageIncrease ?? 0) > 0 ? (
								<IoArrowUpSharp className="inline size-5" />
							) : (
								<IoArrowDownSharp className="inline size-5" />
							)}
							<span className="text-xs">
								{Math.abs(percentageIncrease ?? 0)}%
							</span>
						</div>
						<span className="text-xs font-light text-gray-800 pl-0.5">
							this month
						</span>
					</div>
				)}
			</div>
		</div>
	);
};

interface CategoryRowProps {
	name: string;
	description: string;
	imageUrl: string;
	status: string;
	category: string;
	country: string;
}
const CategoryRow = ({
	name,
	description,
	imageUrl,
	status,
	category,
	country,
}: CategoryRowProps) => {
	return (
		<tr className="*:py-3 *:px-4 *:text-sm *:text-gray-600">
			<td>{name}</td>
			<td className="hidden md:table-cell line-clamp-2">{description}</td>
			<td className="hidden md:table-cell line-clamp-2">{category}</td>
			<td className="hidden sm:table-cell">
				<img
					className="max-h-12 rounded-xl aspect-video object-cover object-center"
					src={imageUrl}
					alt={name}
				/>
			</td>
			<td className="hidden md:table-cell line-clamp-2">{country}</td>
			<td className="flex justify-end sm:justify-start">
				<p
					className={`rounded-md text-xs border px-4 py-1 max-w-fit capitalize min-w-20 text-center ${
						status === 'active'
							? 'bg-green-100 border-green-600 text-green-600'
							: 'bg-red-100 border-red-600 text-red-600'
					}`}
				>
					{status}
				</p>
			</td>
		</tr>
	);
};
