import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const Layout = Component.layout || (({ children }) => <>{children}</>);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	return { pageProps };
};

export default MyApp;
