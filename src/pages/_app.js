import "tailwindcss/tailwind.css";
import '@/pages/preset.css';
import { Header } from '@/components/header';

export default function App({ Component, pageProps }) {
	return (
		<>
		<style global jsx>
		{`
			 html,
			 body,
			 body > div:first-child,
			 div#__next {
				height: 100%;
			 }
		  `}
		</style>
		<style global jsx>
		{`
			 div#__next {
				display: flex;
				flex-direction: column;
			 }
		  `}
		</style>
			<Header/>
			<img src='/images/anime.gif' alt="background" className="bg-img" />
			<div className="py-16 flex justify-center h-full">
				<Component {...pageProps} />
			</div>
		</>
	);
}
