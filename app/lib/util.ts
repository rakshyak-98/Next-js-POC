type Post = {
	id: number;
	title: string;
	slug: string;
	content: string;
};
export async function getPost(): Promise<Post[]> {
	const res = await fetch("http://localhost:3000/api/posts");
	const posts: Post[] = await res.json();
	return posts.map(post => {
        post.slug = post.title.replaceAll(" ", "-");
        return post;
    })
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
	return (await getPost()).find((p) => p.slug === slug);
}

