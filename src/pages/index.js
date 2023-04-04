import path from 'path';
import fs from 'fs';


export default function Home({slugs}) {
	return (<>
			hello:
			{slugs.map((name) => )}
		</>)
}


export const getStaticProps = () => {
	const folder = path.join(process.cwd(), '_projects')
	const files = fs.readdirSync(folder)
	const markdown = files.filter((file) => file.endsWith(".md"))
	const slugs = markdown.map((file) => file.replace(".md", ""))
	return {props: {slugs: slugs}}
}
