import Link from "next/link";
import { getPost } from "@/lib/util";

export default async function Home() {
	const posts = await getPost();
	return (
		<main className="p-4">
			<h1 className="text-2xl font-bold mb-4">My Blog</h1>
			<ul>
				{posts.map((post) => {
					return (
						<li key={post.id}>
							<Link
								href={`/posts/${post.slug}`}
								className="text-blue-500 hover:underline"
							>
								{post.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</main>
	);
}

