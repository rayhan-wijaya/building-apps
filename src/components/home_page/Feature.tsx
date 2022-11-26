import React from 'react';

import Image from 'next/image';

interface Props {
	feature: Feature;
	className?: string;
}

const Feature = ({ feature, className }: Props) => {
	return (
		<div className={`bg-white rounded-lg p-12 shadow-lg flex flex-col gap-4 ${className}`}>
			<div className={`flex justify-center object-contain`}>
				<Image
					src={`/features/${feature.image}` ?? ''}
					alt={feature.imageAlt ?? 'A feature icon.'}
					height={110}
					width={110}
				/>
			</div>

			<div>
				<h3 className="text-center text-ice-blue-900 font-bold text-2xl mb-3">
					{feature.title}
				</h3>

				<p className="text-center leading-5">{feature.description}</p>
			</div>
		</div>
	);
}

export default Feature;
