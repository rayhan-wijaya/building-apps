import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import getBlogPost from 'utils/blogs/getBlogPost';
import getBlogPostsId from 'utils/blogs/getBlogPostsId';

import BlogHeadline from 'components/blog_page/BlogHeadline';
import Footer from 'components/Footer';

interface Props {
	blogPost?: BlogPost;
}

const BlogPost: NextPage<Props> = ({ blogPost }) => {
	if (!blogPost) {
		return <>
			<Head>
				<title>Blog Post Not Found • Building Apps</title>
			</Head>

			<main>
				<div className="py-56 px-14 flex flex-col items-center gap-3">
					<h1 className="text-2xl text-align">Blog Post Not Found!</h1>
					<p className="text-lg text-align">Sorry, we can't seem to find that blog post. Either it's invalid or it has been deleted.</p>
				</div>
			</main>
		</>;
	}

	return (
		<>
			<Head>
				<title>{blogPost.metadata.title} • Building Apps</title>
			</Head>

			<main>
				<BlogHeadline blogPostMetadata={blogPost.metadata} />
				
				<div className="flex flex-col justify-center items-center mb-24">
					<div className="px-12 prose prose-lg" dangerouslySetInnerHTML={{ __html: blogPost.content }}>
					</div>
				</div>

				<Footer />
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
	const blogPost = await getBlogPost({ id: params?.id as string });

	return {
		props: {
			blogPost: blogPost ?? undefined,
		}
	};
}

export const getStaticPaths: GetStaticPaths = async () => {
	const postIds = await getBlogPostsId({ forGetStaticPaths: true });

	return {
		paths: postIds,
		fallback: false,
	};
}

export default BlogPost;
