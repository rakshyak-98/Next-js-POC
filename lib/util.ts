import { AppError } from "@/lib/error";
type Post = {
	id: number;
	title: string;
	slug: string;
	content: string;
};
export async function getPost(): Promise<Post[]> {
	const res = await fetch("http://localhost:3000/api/posts");
	if (res.ok === false) {
		throw new AppError("Failed to fetch posts", {
			url: "http://localhost:3000/api",
			functionName: "getPost",
		});
	}
	const posts: Post[] = await res.json();
	return posts.map((post) => {
		post.slug = post.title.replaceAll(" ", "-");
		return post;
	});
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
	return (await getPost()).find((p) => p.slug === slug);
}

