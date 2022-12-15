import Lesson from 'components/info_page/lesson/Lesson';

interface Props {
	lessonChapter: LessonChapter;
	lessonChapterIndex: number;
}

const LessonChapter = ({ lessonChapter, lessonChapterIndex }: Props) => {
	return (
		<div>
			<h2 className="text-2xl font-semibold text-center mb-7">{lessonChapterIndex}. {lessonChapter.title}</h2>

			<div className="flex flex-col w-fit">
				{lessonChapter.lessons.map((lesson, lessonIndex) => {
					return (
						<Lesson
							lesson={lesson}
							lessonChapterIndex={lessonChapterIndex}
							lessonIndex={lessonIndex + 1}
							key={lesson.title}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default LessonChapter;
