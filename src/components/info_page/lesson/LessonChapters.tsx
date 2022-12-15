import LessonChapter from 'components/info_page/lesson/LessonChapter';

interface Props {
	lessonChapters: LessonChapter[];
}

const LessonChapters = ({ lessonChapters }: Props) => {
	return (
		<div className="flex flex-col gap-16 justify-center items-center p-12">
			{lessonChapters.map((lessonChapter, lessonChapterIndex) => {
				return (
					<LessonChapter
						lessonChapter={lessonChapter}
						lessonChapterIndex={lessonChapterIndex + 1}
						key={lessonChapter.title}
					/>
				);
			})}
		</div>
	);
}

export default LessonChapters;
