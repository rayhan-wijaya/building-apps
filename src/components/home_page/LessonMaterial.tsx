import React from 'react';

import Image from 'next/image';

interface Props {
	lessonMaterial: LessonMaterial;
}

const LessonMaterial = ({ lessonMaterial }: Props) => {
	return (
		<div className="p-5 rounded-lg m-auto grayscale opacity-70 hover:filter-none hover:opacity-100 hover:shadow-lg transition-all">
				<Image
					src={`/lessonMaterials/${lessonMaterial.image}`}
					alt={lessonMaterial.imageAlt}
					height={200}
					width={200}
				/>
		</div>
	);
}

export default LessonMaterial;
