import { Content } from '@/components/content';
import { getPostList, getPostData } from '@/lib/posts';
import Markdown from "markdown-to-jsx";

export async function getStaticProps() {
	const post_slugs = getPostList('about')
	const contents = post_slugs.props.slugs.map(slug => {
		return getPostData(slug, 'about')
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
			<Content title='$whoami' content={getContent()} banner='/images/banners/gaping_dragon.gif'/>
		</>)
}
