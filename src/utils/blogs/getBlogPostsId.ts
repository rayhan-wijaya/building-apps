import path from 'path';
import fs from 'fs/promises';

interface Params {
	forGetStaticPaths?: boolean;
}

const getBlogPostsId = async ({ forGetStaticPaths }: Params) => {
	const blogsDir = path.join(process.cwd(), 'data', 'blogs');
	const postNames = await fs.readdir(blogsDir);

	const postIds = postNames.map(postName => postName.replace(/\.md$/, ''));

	if (forGetStaticPaths) {
		return postIds.map(postId => ({
			params: {
				id: postId,
			}
		}));
	}

	return postIds;
}

export default getBlogPostsId;
