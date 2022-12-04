import Link from 'next/link';

import { format } from 'date-fns';

interface Props {
	blogPost: BlogPost;
}

const BlogPost = ({ blogPost }: Props) => {
	return (
		<Link href={`/blog/${blogPost.id}`} legacyBehavior={true}>
			<a className="flex flex-col gap-6 w-[80%] p-12 rounded-md hover:shadow-xl hover:border-gray-700 transition-all border-gray-300 border-2">
				<div className="flex flex-col gap-2">
					<h2 className="font-semibold text-2xl">{blogPost.metadata.title}</h2>
					<p className="text-gray-700 text-lg">{blogPost.metadata.description}</p>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-gray-700 text-lg">by {blogPost.metadata.author}</p>
					<p className="text-gray-700 text-lg">{format(new Date(blogPost.metadata.date), 'LLLL, d, yyyy')}</p>
				</div>
			</a>
		</Link>
	);
}

export default BlogPost;
