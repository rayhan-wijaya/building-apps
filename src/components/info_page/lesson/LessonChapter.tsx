import Lesson from 'components/info_page/lesson/Lesson';

interface Props {
	lessonChapter: LessonChapter;
}

const LessonChapter = ({ lessonChapter }: Props) => {
	return (
		<div>
			<h2 className="text-2xl font-semibold text-center mb-7">{lessonChapter.title}</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{lessonChapter.lessons.map(lesson => {
					return (
						<Lesson
							lesson={lesson}
							key={lesson.title}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default LessonChapter;
