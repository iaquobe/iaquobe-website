import { Content } from '@/components/content';
import { getPostList, getPostData } from '@/lib/posts';
import Markdown from "markdown-to-jsx";

export async function getStaticProps() {
	const post_slugs = getPostList('general')
	const contents = post_slugs.props.slugs.map(slug => {
		return getPostData(slug, 'general')
	})

	return {
		props: {
			contents: contents
		}
	}
}


export default function Home({ contents }) {
	function getContent() {
		return contents.map(content => (
				<Markdown>
					{content}
				</Markdown>
		))
	}

	return (
		<>
			<Content title='$cat README.md' content={getContent()} banner='/images/banners/shika.gif'/>
		</>)
}
