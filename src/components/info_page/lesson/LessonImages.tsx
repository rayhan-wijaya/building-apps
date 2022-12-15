import Image from 'next/image';
import Link from 'next/link';

interface Props {
    lessons: Lesson[];
}

const LessonImages: React.FC<Props> = ({ lessons }) => {
    return (
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-5 m-auto sm:max-w-2xl p-12">
            {lessons.map(lesson => {
                return (
                    <Link href={lesson.href} className="border-2 p-5 border-gray-500 rounded-md grayscale opacity-70 hover:filter-none hover:opacity-100 hover:scale-110 transition-all bg-white hover:z-30" key={lesson.title}>
                        <Image
                            src={`/lessons/${lesson.image}`}
                            alt={`An icon of ${lesson.title}`}
                            width={200}
                            height={200}
                            className="w-full h-32 object-contain"
                        />
                    </Link>
                );
            })}
        </div>
    );
}

export default LessonImages;