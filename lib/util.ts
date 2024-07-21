import { AppError } from "@/lib/error";
type Post = {
	id: number;
	title: string;
	slug: string;
	content: string;
};

type Comment = {
	id: number;
	name: string;
	content: string;
	author: string;
	body: string;
}

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

export async function getComment(slug: string): Promise<Comment[]> {
	const res = await fetch(`http://localhost:3000/api/comments?postSlug=${slug}`);
	if (res.ok === false) {
		throw new AppError("Failed to fetch comments", {
			url: "http://localhost:3000/api/comments",
			functionName: "getComment",
		});
	}
	const comments: Comment[] = await res.json();
	return comments;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
	const post = (await getPost()).find((p) => p.slug === slug);
	return post
}

