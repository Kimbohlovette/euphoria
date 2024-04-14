import React, { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

interface Props {
	total: number;
	pageSize: number;
	currentPage: number;
	currentNumberOfItems: number;
	onPageChange: (page: number) => void;
}
const Pagination = ({
	total,
	pageSize,
	currentPage,
	currentNumberOfItems,
}: Props) => {
	const totalNumOfPages = Math.ceil(total / pageSize);
	const [page, setPage] = useState(currentPage);
	return (
		<div>
			<div className="flex flex-wrap-reverse gap-5 lg:justify-between">
				<p className="text-sm text-gray-500">
					Showing data {(page - 1) * pageSize + 1} to{" "}
					{(page - 1) * pageSize + currentNumberOfItems} of {total}{" "}
					entries
				</p>
				<div className="flex items-center gap-2 [&_button]:px-3 [&_button]:py-1.5 [&_button]:bg-gray-100 [&_button]:rounded-md text-xs">
					<button
						onClick={() => {
							setPage((page) => (page > 1 ? page - 1 : 1));
						}}
					>
						<GoChevronLeft />
					</button>
					<div className="hidden sm:flex gap-1">
						{Array(4)
							.fill(0)
							.map((_, key) => (
								<button
									className={`${
										page === key + 1 ? "bg-gray-200" : ""
									} ${totalNumOfPages < key + 1 && "hidden"}`}
									onClick={() => setPage(key + 1)}
								>
									{key + 1}
								</button>
							))}

						<div className="self-end px-4">...</div>
						<button
							onClick={() => {
								setPage(totalNumOfPages);
							}}
						>
							{totalNumOfPages < 1 ? 1 : totalNumOfPages}
						</button>
					</div>
					<button
						onClick={() => {
							setPage((page) =>
								page < totalNumOfPages ? page + 1 : page
							);
						}}
					>
						<GoChevronRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
