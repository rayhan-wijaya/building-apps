import { NextPage } from "next";

import { GetStaticProps } from 'next';
import Head from "next/head";

import getFeatures from 'utils/features/getFeatures';
import getUniqueLessons from 'utils/lessons/getUniqueLessons';

import Headline from 'components/home_page/Headline';
import Footer from 'components/Footer';

import Features from 'components/home_page/Features';
import Lessons from 'components/home_page/lesson/Lessons';
import Instructor from 'components/home_page/Instructor';

interface Props {
	features: Feature[];
	lessons: Lesson[];
}

const Home: NextPage<Props> = ({ features, lessons }) => {
	return (
		<>
			<Head>
				<title>Building Apps</title>
			</Head>

			<main>
				<Headline />
				
				<section className="flex justify-center relative bottom-32">
					<Features features={features} />
				</section>

				<section className="flex justify-center item-center flex-col mb-24">
					<h2 className="text-3xl text-center text-ice-blue-900 font-semibold mb-[27px]">What will you learn?</h2>

					<Lessons lessons={lessons} />
				</section>

				<section className="flex justify-center item-center flex-col mb-24">
					<Instructor />
				</section>

				<Footer includeRegisterCard={true} />
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const features = await getFeatures();
	const lessons = await getUniqueLessons({ onlyFeatured: true });

	return {
		props: {
			features,
			lessons,
		}
	}
}

export default Home;
