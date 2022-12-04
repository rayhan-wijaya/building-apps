import path from 'path';
import fs from 'fs/promises';

import matter from 'gray-matter';

interface Params {
	sortBy?: 'date';
}

const getBlogPosts = async ({ sortBy }: Params) => {
	const blogsDir = path.join(process.cwd(), 'data', 'blogs');
	const postNames = await fs.readdir(blogsDir);

	const posts: BlogPost[] = await Promise.all(
		postNames.map(async fileName => {
			const postPath = path.join(blogsDir, fileName);

			const unformattedContent = (await fs.readFile(postPath)).toString();
			const matterResult = matter(unformattedContent);

			const id = fileName.replace(/\.md$/, '');
			const content = matterResult.content;
			const data = matterResult.data as BlogPost["metadata"];

			return {
				id,
				content,
				metadata: data,
			};
		})
	);

	if (sortBy === 'date') {
		return posts.sort(( {metadata: { date: a }}, {metadata: { date: b }} ) => {
			if (a < b) {
				return 1;
			}

			if (a > b) {
				return -1;
			}

			return 0;
		});
	}

	console.log('posts:', posts);
}

export default getBlogPosts;
