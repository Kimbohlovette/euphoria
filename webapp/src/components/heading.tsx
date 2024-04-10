const Heading = ({ text }: { text: string }) => {
	return (
		<h1 className="text-2xl py-8 md:py-10 font-[100] text-gray-800 before:content-['_'] flex items-center gap-5 before:w-1 before:rounded-lg before:h-6 before:bg-violet-600">
			{text}
		</h1>
	);
};

export default Heading;
