import { Content } from '@/components/content';
import { getPostList, getPostData } from '@/lib/posts';
import Markdown from "markdown-to-jsx";

export async function getStaticProps(context) {
	const { site } = context.params; 

	const post_slugs = getPostList(site)
	const contents = post_slugs.props.slugs.map(slug => {
		return getPostData(slug, site)
	})

	return {
		props: {
			contents: contents
		}
	}
}

export async function getStaticPaths(){
	return {
		paths: [
			{ params: { site: ''}},
			{ params: { site: 'about'}},
			{ params: { site: 'dot-files'}},
			{ params: { site: 'projects'}},
		],
		fallback: false,
	};
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
