import Link from "next/link"

export const Header = () => {
	return (
		<>
			<header className="text-xs shadow-2xl window w-full fixed z-10">
				<div className="title-bar">
					Navigation
				</div>
				<div className="space-x-1 m-2 flex flex-row">
					<Link className="btn" href='/'>/index.html</Link>
					<Link className="btn" href='/projects'>/projects/</Link>
					<Link className="btn" href='/dot-files'>/.config/</Link>
					<Link className="btn" href="/about">/about.md</Link>
				</div>
			</header>
		</>
	)
}
