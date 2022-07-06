import "../styles/globals.css";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
	const config: ThemeConfig = {
		initialColorMode: "dark",
		useSystemColorMode: false,
	};

	const theme = extendTheme({ config });

	return (
		<ChakraProvider theme={theme}>
			<Navbar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
