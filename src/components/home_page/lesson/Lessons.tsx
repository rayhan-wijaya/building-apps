import React from 'react';

import Lesson from 'components/home_page/lesson/Lesson';

interface Props {
	lessons: Lesson[];
}

const Lessons = ({ lessons }: Props) => {
	return (
		<div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-7 w-[80%] sm:max-w-2xl m-auto">
			{lessons.map(lesson => {
				return (
					<Lesson
						lesson={lesson}
						key={lesson.title}
					/>
				);
			})}
		</div>
	);
}

export default Lessons; 
