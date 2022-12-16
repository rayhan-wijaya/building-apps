import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CodeWidget from 'components/home_page/CodeWidget';

const Headline = () => {
	return (
		<header className="bg-cool-blue-900">
			 <div className="flex flex-col-reverse lg:flex-row justify-center py-64 px-8 lg:px-24 gap-32">
				<div className="flex flex-col justify-center items-left xs:items-center lg:items-start">
					<h1 className="text-white text-left xs:text-center lg:text-left text-3xl font-semibold mb-5">
						Learn to Build Apps <br />
						<span className="text-ice-blue-100 font-bold">For Free!</span>
					</h1>

					<p className="text-white max-w-md mb-5 text-xl xs:text-center lg:text-left">
						Teaching you mobile and web development for up to 2 or 3 months.
						At the end, you can build your own online shop!
					</p>

					<div className="flex flex-col lg:flex-row gap-3 justify-center items-start xs:items-center lg:items-start lg:justify-start text-lg w-full">
						<Link className="button-primary lg:w-fit w-44 text-center text-xl py-2 whitespace-nowrap" href="/register">
							Register {' '}
							<span className="font-inter">&rarr;</span>
						</Link>

						<Link className="button-secondary lg:w-fit w-44 text-center text-xl py-2 whitespace-nowrap" href="/info">More Info</Link>
					</div>
				</div>

				<div className="flex gap-5 justify-center items-center overflow-hidden relative">
					<CodeWidget className="absolute w-full motion-safe:animate-codeWidget" />

					<div className="opacity-0 motion-safe:animate-phone">
						<Image src="/graphics/phone.svg" alt="An image of a product page on a phone." width={200} height={100} />
					</div>
					
					<div className="opacity-0 motion-safe:animate-laptop hidden sm:block">
						<Image src="/graphics/laptop.svg" alt="An image of a product page on a laptop." width={500} height={500} />
					</div>
				</div>
			</div>

			<div className="rotate-180 h-24 w-full relative top-2">
				<Image
					src="/dividers/curve.svg"
					alt="A curve divider."
					fill={true}
				/>
			</div>
		</header>
	);
}

export default Headline;
