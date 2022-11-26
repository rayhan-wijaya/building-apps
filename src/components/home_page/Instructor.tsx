import React from 'react';

import Image from 'next/image';

const Instructor = () => {
	return (
		<div className="flex item-center justify-center gap-14">
			<div className="flex flex-col justify-center">
				<h2 className="text-ice-blue-900 font-semibold text-3xl mb-5">Hi! I'm Rayhan Wijaya</h2>
				<p className="text-lg">I will be your instructor during <br /> this program.</p>
			</div>

			<div className="rounded-full overflow-hidden">
				<Image
					src="/instructor/rayhanwijaya.jpg"
					alt="An image of Rayhan Wijaya."
					width={250}
					height={250}
				/>
			</div>
		</div>
	);
}

export default Instructor;
