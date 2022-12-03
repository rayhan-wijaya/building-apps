import path from 'path';
import readJson from 'utils/readFile/readJson';

interface Params {
	onlyFeatured: boolean;
}

const getUniqueLessons = async ({ onlyFeatured }: Params) => {
	const lessons: LessonMaterial[] = [];
	const takenLessons = new Set<string>();

	const dir = path.join(process.cwd(), 'data');
	const lessonChapters = (await readJson<LessonsData>('lessons.json', dir)).chapters;

	for (const lessonChapter of lessonChapters) {
		for (const lesson of lessonChapter.lessons) {
			if (takenLessons.has(lesson.title)) {
				continue;
			}

			lessons.push(lesson);
			takenLessons.add(lesson.title);
		}
	}

	if (onlyFeatured) {
		const featuredLessons = [];

		for (const lesson of lessons) {
			if (!lesson.featured) {
				continue;
			}

			featuredLessons.push(lesson);
		}

		return featuredLessons;
	}

	return lessons;
}

export default getUniqueLessons;
