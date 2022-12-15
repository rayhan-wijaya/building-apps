interface LessonsData {
	chapters: LessonChapter[];
}

interface LessonChapter {
	title: string;
	lessons: Lesson[];
}

interface Lesson {
	title: string;
	purpose: string;
	image: string;
	href: string;
	featured?: boolean;
}
