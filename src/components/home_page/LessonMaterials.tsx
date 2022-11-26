import React from 'react';

import LessonMaterial from 'components/home_page/LessonMaterial';

interface Props {
	lessonMaterials: LessonMaterial[];
}

const LessonMaterials = ({ lessonMaterials }: Props) => {
	return (
		<div className="grid grid-cols-3 gap-7 max-w-2xl m-auto">
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
