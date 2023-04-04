import Link from 'next/link';
import { Content } from '@/components/content';
import { getPostList } from '@/lib/posts';


export default function Home({slugs}) {
	return (<>
		<div className="h-100 bg-[url('/images/anime.gif')]">
			<Content/>
			{slugs.map((name) => (
					<Link href={'/projects/' + name}>
						{name}
					</Link>
				))}
		</div>
		</>)
}


export const getStaticProps = () => {
	return getPostList()
}
