import Link from 'next/link';

interface Props {
	lesson: Lesson;
	lessonChapterIndex: number;
	lessonIndex: number;
}

const Lesson = ({ lesson, lessonChapterIndex, lessonIndex }: Props) => {
	return (
		<div className="w-fit flex flex-col sm:flex-row gap-0 sm:gap-3 mb-7 sm:mb-0">
			<span className="text-2xl w-fit whitespace-nowrap font-semibold sm:font-normal">Lesson {lessonChapterIndex}.{lessonIndex}:</span>

		    <h3 className="text-2xl">
				<Link href={lesson.href} className="font-semibold underline text-ice-blue-200">
					{lesson.title}
				</Link>

				{' '}

				{lesson.purpose}
		    </h3>
		</div>
	);
}

export default Lesson;
