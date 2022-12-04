interface BlogPost {
	id: string;
	content: string;
	metadata: {
		title: string;
		author: string;
		description: string;
		date: Date | string;
	}
}
