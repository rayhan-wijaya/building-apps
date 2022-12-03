import path from 'path';
import readJson from 'utils/readFile/readJson';

const getFeatures = async () => {
	const dir = path.join(process.cwd(), 'data');
	const features = readJson<Feature[]>('features.json', dir);

	return features;
}

export default getFeatures;
