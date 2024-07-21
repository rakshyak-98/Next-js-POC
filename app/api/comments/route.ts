import { AppError } from "@/lib/error";
import { NextResponse } from "next/server";

type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const postId = searchParams.get("postId");

	if (!postId) {
		let message = new AppError("Post id is required", {
			reason: "Post ID not found in url search params",
		}).message;
		return NextResponse.json(
			{
				error: message,
			},
			{ status: 400 }
		);
	}
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    let comments: Comment[] = await res.json();
    comments = comments.filter((comment) => comment.id.toString() === postId )
	return NextResponse.json(comments ? comments : []);
}

