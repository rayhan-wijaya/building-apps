interface LessonsData {
	chapters: LessonChapter[];
}

interface LessonChapter {
	title: string;
	lessons: LessonMaterial[];
}

interface LessonMaterial {
	title: string;
	image: string;
	href: string;
	featured?: boolean;
}
