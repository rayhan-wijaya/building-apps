import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import getLessonChapters from 'utils/lessons/getLessonChapters';

import Headline from 'components/info_page/Headline';
import Footer from 'components/Footer';

import Goal from 'components/info_page/Goal';

import LessonChapters from 'components/info_page/lesson/LessonChapters';

interface Props {
	lessonChapters: LessonChapter[];
}

const MoreInfo: NextPage<Props> = ({ lessonChapters }) => {
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
				</section>

				<Footer />
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const lessonChapters = await getLessonChapters();

	return {
		props: {
			lessonChapters,
		}
	};
}

export default MoreInfo;
