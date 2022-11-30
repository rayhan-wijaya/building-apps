import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Headline = () => {
	return (
		<header className="bg-cool-blue-900">
			<div className="flex py-64 px-32">
				<div>
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
