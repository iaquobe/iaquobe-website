import { Content } from '@/components/content';
import { getPostList, getPostData } from '@/lib/posts';
import Markdown from "markdown-to-jsx";

export async function getStaticProps() {
	const post_slugs = getPostList()
	const contents = post_slugs.props.slugs.map(slug => {
		return getPostData(slug)
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
			<Content title='$ls ~/projects' content={getContent()} banner='/images/banners/hollow_knight.gif'/>
		</>)
}
