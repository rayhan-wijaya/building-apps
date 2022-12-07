import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import getBlogPosts from 'utils/blogs/getBlogPosts';

import BlogsHeadline from 'components/blog_page/BlogsHeadline';
import Footer from 'components/Footer';

import BlogPosts from 'components/blog_page/blogPost/BlogPosts';

interface Props {
	blogPosts: BlogPost[];
}

const Blogs: NextPage<Props> = ({ blogPosts }) => {
	return (
		<>
			<Head>
				<title>Blog • Building Apps</title>
			</Head>

			<main>
				<BlogsHeadline />

				<BlogPosts blogPosts={blogPosts} className="mb-24" />

				<Footer />
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const blogPosts = await getBlogPosts({ sortBy: 'date' });

	return {
		props: {
			blogPosts,
		}
	};
}

export default Blogs;
