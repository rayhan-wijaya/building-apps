import BlogPost from 'components/blog_page/blogPost/BlogPostLink';

interface Props {
	blogPosts: BlogPost[];
	className?: string;
}

const BlogPosts = ({ blogPosts, className }: Props) => {
	return (
		<div className={`flex flex-col gap-4 justify-center items-center ${className}`}>
			{blogPosts.map(blogPost => {
				return (
					<BlogPost
						blogPost={blogPost}
						key={blogPost.id}
					/>
				);
			})}
		</div>
	);
}

export default BlogPosts;
