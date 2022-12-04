import path from 'path';
import fs from 'fs/promises';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface Params {
	id: string;
}

const getBlogPost = async ({ id }: Params) => {
	const blogsDir = path.join(process.cwd(), 'data', 'blogs');
	const postPath = path.join(blogsDir, `${id}.md`);

	const unformattedContent = (await fs.readFile(postPath)).toString();
	const matterResult = matter(unformattedContent);

	const matterContent = matterResult.content;
	const data = matterResult.data as BlogPost["metadata"];

	const processedContent = await remark()
		.use(html)
		.process(matterContent);

	const content = processedContent.toString();

	return {
		id,
		content,
		metadata: data,
	};
}

export default getBlogPost;
