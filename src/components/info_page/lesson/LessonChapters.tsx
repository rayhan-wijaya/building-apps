import LessonChapter from 'components/info_page/lesson/LessonChapter';

interface Props {
	lessonChapters: LessonChapter[];
}

const LessonModules = ({ lessonChapters }: Props) => {
	return (
		<div className="flex flex-col gap-32 justify-center items-center p-12">
			{lessonChapters.map(lessonChapter => {
				return (
					<LessonChapter lessonChapter={lessonChapter} />
				);
			})}
		</div>
	);
}

export default LessonModules;
