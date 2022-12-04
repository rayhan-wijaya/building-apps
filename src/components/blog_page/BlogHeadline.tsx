import { format } from 'date-fns';

interface Props {
	blogPostMetadata: BlogPost["metadata"];
}

const BlogHeadline = ({ blogPostMetadata }: Props) => {
	return (
		<header>
			<div className="flex flex-col items-center pt-56 pb-32 px-14 gap-7">
				<div className="text-center flex flex-col items-center gap-3 text-xl">
					<h1 className="text-3xl font-bold">{blogPostMetadata.title}</h1>
					<p>{blogPostMetadata.description}</p>
				</div>

				<div className="text-center flex flex-col items-center text-lg text-gray-600">
					<p>by {blogPostMetadata.author}</p>
					<p>{format(new Date(blogPostMetadata.date), 'LLLL, d, yyyy')}</p>
				</div>
			</div>
		</header>
	);
}

export default BlogHeadline;
