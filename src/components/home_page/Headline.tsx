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
						This program will teach you web and mobile development, <br />
						which at the end you’ll build an online shop!
					</p>

					<div className="flex gap-4">
						<Link className="button-primary" href="/register">
							Register {' '}
							<span className="font-inter">&rarr;</span>
						</Link>

						<Link className="button-secondary" href="/">More Info</Link>
					</div>
				</div>

				<div className="flex gap-5 items-center overflow-hidden relative">
					<CodeWidget className="absolute w-full animate-[appear-from-below_0.75s_ease_forwards,_1s_disappear-to-top_ease_2.5s_forwards]" />

					<div className="opacity-0 animate-[appear-from-below_0.97s_ease_2.7s_forwards]">
						<Image src="/graphics/phone.svg" alt="An image of a product page on a phone." width={200} height={100} />
					</div>
					
					<div className="opacity-0 animate-[appear-from-below_1s_ease_2.75s_forwards]">
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
