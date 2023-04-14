import path from 'path'
import fs from 'fs'

const postsDirectory = path.join(process.cwd(), 'projects')

export function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	return fileContents
}

export function getPostList() {
	const files = fs.readdirSync(postsDirectory)
	const markdown = files.filter((file) => file.endsWith(".md"))
	const slugs = markdown.map((file) => file.replace(".md", ""))
	return {props: {slugs: slugs}}
}

export function getAllPostSlugs() {
	const files = fs.readdirSync(postsDirectory)
	const markdown = files.filter((file) => file.endsWith(".md"))
	return markdown.map((file) => 
		{return {params: {slug: file.replace(".md", "")}}})
}
