import Image from 'next/image';

const Headline = () => {
	return (
		<header className="bg-cool-blue-900">
			<div className="flex flex-col justify-center gap-16">
				<div className="flex justify-center items-center pt-56 pb-16 px-24 gap-16">
					<h1 className="text-white text-3xl text-center font-semibold">Building Apps Program</h1>
				</div>

				<div className="rotate-180 h-24 w-full relative top-2">
					<Image
						src="/dividers/curve.svg"
						alt="A curve divider."
						fill={true}
					/>
				</div>
			</div>
		</header>
	);
}

export default Headline;
