import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/util";
import dynamic from "next/dynamic";
const DynamicCommentSession = dynamic(() => import("@/app/components/CommentSection"), {
	ssr: false,
});

type Params = {
	slug: string;
};

type Post = {
	id: number;
	title: string;
	slug: string;
	content: string;
};

export default async function Post({ params }: { params: Params }) {
	const post = await getPostBySlug(params.slug);
	if (!post) {
		notFound();
	}
	return (
		<main className="p-4">
			<h1 className="text-2xl font-bold mb-4">{post.title}</h1>
			<p>{post.content}</p>
			<DynamicCommentSession postId={post.id.toString()} />
		</main>
	);
}

