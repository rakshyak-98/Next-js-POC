"use client";

import { getComment } from "@/lib/util";

type Comment = {
	id: number;
	name: string;
	email: string;
	body: string;
};

import { useState, useEffect } from "react";

export default function CommentSection({ postId }: { postId: string }) {
	const [comments, setComments] = useState<Comment[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`http://localhost:3000/api/comments?postId=${postId}`)
			.then((res) => res.json())
			.then((data) => {
				setComments(data);
				setIsLoading(false);
			})
			.catch(console.error);
		return () => {
			// otherwise never stop loading.
			setTimeout(() => {
				setIsLoading(false);
			}, 3000);
		};
	}, [postId]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div className="mt-6">
			<h2 className="text-xl font-semibold mb-4">Comments</h2>
			{comments.length > 0 ? (
				<ul>
					{comments.map((comment) => (
						<li key={comment.id} className="mb-4">
							<h3 className="text-lg font-semibold">{comment.name}</h3>
							<p className="text-gray-700">{comment.body}</p>
							<p className="text-gray-500 text-sm">{comment.email}</p>
						</li>
					))}
				</ul>
			) : (
				<p>No comment yet.</p>
			)}
		</div>
	);
}

