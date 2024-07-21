import Link from "next/link";
export default function PostLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="">
			<nav className="mb-4">
				<Link href={"/"} className="text-blue-500 hover:underline">
					← Back to Home
				</Link>
			</nav>
			{children}
		</div>
	);
}

