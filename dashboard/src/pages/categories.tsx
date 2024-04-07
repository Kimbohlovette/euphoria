import { CiMonitor } from 'react-icons/ci';
import { IoArrowDownSharp, IoArrowUpSharp } from 'react-icons/io5';
import { LuUserCheck, LuUsers2 } from 'react-icons/lu';
import Dropdown from '../components/dropdown';
import SearchInput from '../components/search_input_control';
import { GoChevronRight } from 'react-icons/go';

const Categories = () => {
	return (
		<div className="flex flex-col gap-8">
			<section className="p-6 bg-white rounded-3xl grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] lg:divide-x *:px-4 gap-8">
				<div>
					<SummaryCard
						title="Categories"
						count={23}
						percentageIncrease={16}
						icon={<LuUsers2 size={30} />}
					/>
				</div>
				<div>
					<SummaryCard
						title="Avg Sale Per Category"
						count={100}
						percentageIncrease={-1}
						icon={<LuUserCheck size={30} />}
					/>
				</div>
				<div>
					<SummaryCard
						icon={<CiMonitor size={30} />}
						title="Cats with Products"
						count={19}
					/>
				</div>
			</section>
			<section className="p-6 bg-white rounded-3xl">
				<header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
					<div>
						<h1 className="text-gray-800 font-semibold text-2xl">
							Categories
						</h1>
						<p className="text-green-500 py-2 font-light">
							Active categories
						</p>
					</div>
					<div className="flex items-center flex-wrap *:w-full gap-4 *:sm:w-fit">
						<SearchInput
							onSubmit={() => {}}
							onReset={() => {}}
							value=""
							placeholder="Search"
							onChange={() => {}}
							containerStyle={{ backgroundColor: '#f9fafb' }}
						/>
						<Dropdown
							data={[]}
							onSelect={() => {}}
							placeholder="Sort by:"
							containerStyle={{ backgroundColor: '#f9fafb' }}
						/>
					</div>
				</header>
				<div className="py-5">
					<table className="w-full">
						<thead>
							<tr className="*:px-4 *:py-3 text-left text-sm text-gray-500 *:font-light">
								<th>Name</th>
								<th>Desription</th>
								<th></th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody className="divide-y">
							{Array(8)
								.fill(3)
								.map((row, key) => (
									<CategoryRow
										description="Some fake description"
										imageUrl="https://plus.unsplash.com/premium_photo-1661508557554-e3d96f2fdde5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										name="Mens"
										status={
											Math.random() < 0.5
												? 'inactive'
												: 'active'
										}
										key={key}
									/>
								))}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
};

export default Categories;

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
}
const CategoryRow = ({
	name,
	description,
	imageUrl,
	status,
}: CategoryRowProps) => {
	return (
		<tr className="*:py-3 *:px-4 *:text-sm *:text-gray-600">
			<td>{name}</td>
			<td className="line-clamp-2">{description}</td>
			<td>
				<img
					className="max-h-12 rounded-xl aspect-video object-cover object-center"
					src={imageUrl}
					alt={name}
				/>
			</td>
			<td>
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
