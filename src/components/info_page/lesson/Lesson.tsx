import Image from 'next/image';
import Link from 'next/link';

interface Props {
	lesson: Lesson;
}

const Lesson = ({ lesson }: Props) => {
	return (
		<Link href={lesson.href} legacyBehavior={true}>
			<a className="grayscale opacity-70 hover:filter-none hover:opacity-100 hover:scale-105 hover:z-20 bg-white rounded-md hover:shadow-lg hover:shadow-gray-200 hover:border-gray-500 border-2 border-gray-200 transition-all p-7 flex flex-col justify-center gap-7 items-center">
				<div className="h-44 w-full relative">
					<Image
						src={`/lessons/${lesson.image}`}
						alt={`An icon of ${lesson.title}`}
						fill={true}
						objectFit="scale-down"
					/>
				</div>

				<h3 className="text-2xl text-center">{lesson.title}</h3>
			</a>
		</Link>
	);
}

export default Lesson;
