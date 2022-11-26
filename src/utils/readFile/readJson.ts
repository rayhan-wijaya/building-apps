import fsPromises from 'fs/promises';
import path from 'path';

const readJson = async <T>(givenFilePath: string, dir?: string): Promise<T> => {
	const filePath = (
		dir
		? path.join(dir, givenFilePath)
		: givenFilePath
	);

	const jsonString = (await fsPromises.readFile(filePath)).toString();
	const json: T = await JSON.parse(jsonString);

	return json;
}

export default readJson;
