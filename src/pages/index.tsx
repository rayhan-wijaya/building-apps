import { NextPage } from "next";

import { GetStaticProps } from 'next';
import Head from "next/head";

import path from 'path';

import readJson from 'utils/readFile/readJson';

import Headline from 'components/home_page/Headline';
import Features from 'components/home_page/Features';
import LessonMaterials from 'components/home_page/LessonMaterials';
import Instructor from 'components/home_page/Instructor';

interface Props {
	features: Feature[];
	lessonMaterials: LessonMaterial[];
}

const Home: NextPage<Props> = ({ features, lessonMaterials }) => {
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

					<LessonMaterials lessonMaterials={lessonMaterials} />
				</section>

				<section className="flex justify-center item-center flex-col mb-24">
					<Instructor />
				</section>
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const dataDir = path.join(process.cwd(), 'data');

	const features = await readJson<Feature[]>('features.json', dataDir);
	const lessonMaterials = await readJson<LessonMaterial[]>('lessonMaterials.json', dataDir);

	return {
		props: {
			features,
			lessonMaterials,
		}
	}
}

export default Home;
