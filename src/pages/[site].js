import { Content } from '@/components/content';
import { getPostList, getPostData } from '@/lib/posts';
import Markdown from "markdown-to-jsx";
import ChessAnalysisBoard from 'react-chess-analysis-board';

export async function getStaticProps(context) {
	const banners = {
		'about'       : 'gaping_dragon.gif',
		'projects'    : 'hollow_knight.gif',
		'dot-files'   : 'ocarina-of-time.gif',
		'chess'       : 'chess.gif',
	}
	const { site } = context.params; 
	

	const post_slugs = getPostList(site)
	const contents = post_slugs.props.slugs.map(slug => {
		return getPostData(slug, site)
	})

	return {
		props: {
			contents: contents,
			banner: banners[site],
		}
	}
}

export async function getStaticPaths(){
	return {
		paths: [
			{ params: { site: 'about'}},
			{ params: { site: 'chess'}},
			{ params: { site: 'dot-files'}},
			{ params: { site: 'projects'}},
		],
		fallback: false,
	};
}


export default function Home({ contents, banner }) {

  function chessBoard({className, children}) {
		var boardOrientation = "White"
		if(className) {
			boardOrientation = className.replace('lang-', '')
		}
		console.log(className)
		console.log(boardOrientation)
    return <div>
      <div>
				<ChessAnalysisBoard pgnString={children} config={{boardConfig: {ChessBoardProps: {boardOrientation, customDarkSquareStyle: {backgroundColor: '#C593EB'}, customLightSquareStyle: {backgroundColor: '#BBBAE9'}}}}}/>
      </div>
    </div>
  }

	function getContent() {
		return contents.map(content => (
				<Markdown options={{ overrides: { code: chessBoard } }}>
					{content}
				</Markdown>
		))
	}

	return (
		<>
			<Content title='$whoami' content={getContent()} banner={'/images/banners/' + banner}/>
		</>)
}
