import React from 'react';

import { GetStaticProps } from 'next';

import Feature from 'components/home_page/Feature';

interface Props {
	features: Feature[];
}

const Features = ({ features }: Props) => {
	return (
		<div className="grid grid-cols-2 gap-4 max-w-2xl">
			{features.map(feature => {
				return (
					<Feature
						feature={feature}
						className={feature.important ? 'col-span-2' : ''}
						key={feature.title}
					/>
				);
			})}
		</div>
	);
}


export default Features;
