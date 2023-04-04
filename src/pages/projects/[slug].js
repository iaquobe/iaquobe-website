import { getPostData, getAllPostSlugs } from '@/lib/posts';
import Markdown from "markdown-to-jsx";

export default function Project ({content}) {
	return (
		<>
		<Markdown>
		{content}
		</Markdown>
		</>
	); 
}

export async function getStaticPaths() {
	const paths = getAllPostSlugs()
	return {
		paths, 
		fallback: false
	}
}

export async function getStaticProps({ params }) {
  const content = getPostData(params.slug)
  return {
    props: {
		 content: content
    }
  }
}
