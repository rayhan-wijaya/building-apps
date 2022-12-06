import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CodeWidget from 'components/home_page/CodeWidget';

const Headline = () => {
	return (
		<header className="bg-cool-blue-900">
			<div className="flex justify-center py-64 px-24 gap-16">
				<div className="flex flex-col justify-center">
					<h1 className="text-white text-3xl font-semibold mb-5">
						Learn to Build Apps <br />
						<span className="text-ice-blue-100 font-bold">For Free!</span>
					</h1>

					<p className="text-white mb-5">
						Teaching you mobile and web development. <br />
						At the end, you can build your own online shop!
					</p>

					<div className="flex gap-4">
						<Link className="button-primary" href="/register">
							Register {' '}
							<span className="font-inter">&rarr;</span>
						</Link>

						<Link className="button-secondary" href="/info">More Info</Link>
					</div>
				</div>

				<div className="flex gap-5 items-center overflow-hidden relative">
					<CodeWidget className="absolute w-full motion-safe:animate-codewidget" />

					<div className="opacity-0 motion-safe:animate-phone">
						<Image src="/graphics/phone.svg" alt="An image of a product page on a phone." width={200} height={100} />
					</div>
					
					<div className="opacity-0 motion-safe:animate-laptop">
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
