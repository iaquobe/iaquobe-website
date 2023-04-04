import "tailwindcss/tailwind.css";

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
				<Component {...pageProps} />
		</>
	);
}
