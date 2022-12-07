import React from 'react';

import Image from 'next/image';

const Instructor = () => {
	return (
		<div className="flex md:flex-row flex-col-reverse items-center justify-center gap-14 px-8">
			<div className="flex flex-col justify-center">
				<h2 className="text-ice-blue-900 font-semibold text-3xl mb-5">Hi! I&apos;m Rayhan Wijaya</h2>
				<p className="text-xl">I will be your instructor during this program.</p>
			</div>

			<div className="rounded-full overflow-hidden">
		    	<Image
		    		src="/instructor/rayhanwijaya.jpg"
		    		alt="An image of Rayhan Wijaya."
		    		width={250}
		    		height={250}
		    		className="object-none w-72 h-72 object-[50%_65%]"
		    	/>
			</div>
		</div>
	);
}

export default Instructor;
