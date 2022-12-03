import path from 'path';
import readJson from 'utils/readFile/readJson';

const getLessonChapters = async () => {
	const dir = path.join(process.cwd(), 'data');
	const lessonChapters = (await readJson<LessonsData>('lessons.json', dir)).chapters;

	return lessonChapters;
}

export default getLessonChapters; 
