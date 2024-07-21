import { NextResponse } from "next/server";

export async function GET() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await res.json();
	return NextResponse.json(JSON.parse(JSON.stringify(posts)), {
		status: 200,
		headers: { "content-type": "application/json" },
	});
}

