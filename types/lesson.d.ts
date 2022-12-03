interface LessonsData {
	chapters: LessonChapter[];
}

interface LessonChapter {
	title: string;
	lessons: LessonMaterial[];
}

interface Lesson {
	title: string;
	image: string;
	href: string;
	featured?: boolean;
}
