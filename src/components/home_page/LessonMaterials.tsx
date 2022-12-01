import React from 'react';

import LessonMaterial from 'components/home_page/LessonMaterial';

interface Props {
	lessonMaterials: LessonMaterial[];
}

const LessonMaterials = ({ lessonMaterials }: Props) => {
	return (
		<div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-7 w-[80%] sm:max-w-2xl m-auto">
			{lessonMaterials.map(lessonMaterial => {
				return (
					<LessonMaterial
						lessonMaterial={lessonMaterial}
						key={lessonMaterial.title}
					/>
				);
			})}
		</div>
	);
}

export default LessonMaterials; 
