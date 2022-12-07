import React from 'react';

import Image from 'next/image';

const Instructor = () => {
	return (
		<div className="flex md:flex-row flex-col-reverse items-center justify-center gap-14 px-8">
			<div className="flex flex-col justify-center">
				<h2 className="text-ice-blue-900 font-semibold text-3xl mb-5">Hi! I'm Rayhan Wijaya</h2>
				<p className="text-xl">I will be your instructor during this program.</p>
			</div>

			<Image
				src="/instructor/rayhanwijaya.jpg"
				alt="An image of Rayhan Wijaya."
				width={250}
				height={250}
				className="rounded-full object-none w-72 h-72 object-[50%_65%]"
			/>
		</div>
	);
}

export default Instructor;
