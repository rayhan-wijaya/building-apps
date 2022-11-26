import { NextPage } from "next";

import { GetStaticProps } from 'next';
import Head from "next/head";

import path from 'path';

import readJson from 'utils/readFile/readJson';

import Headline from 'components/home_page/Headline';
import Features from 'components/home_page/Features';
import LessonMaterials from 'components/home_page/LessonMaterials';

interface Props {
	features: Feature[];
	lessonMaterials: LessonMaterial[];
}

const Home: NextPage<Props> = ({ features, lessonMaterials }) => {
	return (
		<></>
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
