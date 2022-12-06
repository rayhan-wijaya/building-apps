import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface Props {
	lesson: Lesson;
}

const Lesson = ({ lesson }: Props) => {
	return (
		<Link href={lesson.href} legacyBehavior={true}>
			<a className="p-5 rounded-lg m-auto grayscale opacity-70 hover:filter-none hover:opacity-100 hover:shadow-lg transition-all">
				<Image
					src={`/lessons/${lesson.image}`}
					alt={`An icon of ${lesson.title}`}
					height={200}
					width={200}
				/>
			</a>
		</Link>
	);
}

export default Lesson;
