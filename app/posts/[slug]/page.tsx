import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/util";

type Params = {
	slug: string;
};

type Post = {
	id: number;
	title: string;
	slug: string;
	content: string;
};

const posts: Post[] = [];

export default async function Post({ params }: { params: Params }) {
	const post = await getPostBySlug(params.slug);
	if (!post) {
		notFound();
	}
	return (
		<main className="p-4">
			<h1 className="text-2xl font-bold mb-4">{post.title}</h1>
			<p>{post.content}</p>
		</main>
	);
}

