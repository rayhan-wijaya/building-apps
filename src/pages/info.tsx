import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import getLessonChapters from 'utils/lessons/getLessonChapters';
import getUniqueLessons from 'utils/lessons/getUniqueLessons';

import Headline from 'components/info_page/Headline';
import Footer from 'components/Footer';

import Goal from 'components/info_page/Goal';

import LessonChapters from 'components/info_page/lesson/LessonChapters';
import LessonImages from 'components/info_page/lesson/LessonImages';

interface Props {
	lessonChapters: LessonChapter[];
	uniqueLessons: Lesson[];
}

const MoreInfo: NextPage<Props> = ({ lessonChapters, uniqueLessons }) => {
	return (
		<>
			<Head>
				<title>More Info • Building Apps</title>
			</Head>

			<main>
				<Headline />

				<section>
					<Goal />
				</section>

				<section>
					<LessonChapters lessonChapters={lessonChapters} />

					<LessonImages lessons={uniqueLessons} />
				</section>

				<Footer />
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const lessonChapters = await getLessonChapters();
	const uniqueLessons = await getUniqueLessons();

	return {
		props: {
			lessonChapters,
			uniqueLessons,
		}
	};
}

export default MoreInfo;
