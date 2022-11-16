import '../styles/globals.css'
import { ChakraProvider, extendTheme, systemProps, ThemeConfig } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  const theme: ThemeConfig = extendTheme({
    colors: {
      mocha: {
        100: "#cdd6f4",
        200: "#bac2de",
        300: "#a6adc8",
        400: "#585b70",
        500: "#45475a",
        600: "#313244",
        700: "#1e1e2e",
        800: "#181825",
        900: "#11111b",
      },
      Black:{
        600: "#313244",
        700: "#1e1e2e",
        800: "#181825",
        900: "#11111b",
      },
      red: {
        100: "#eba0ac",
        200: "#f38ba8"
      },
      blue: {
        100: "#94e2d5",
        200: "#89dceb",
        300: "#74c7ec",
        400: "#89b4fa"
      }
    },
    initialColorMode: 'dark',
    useSystemColorMode: false,
  })

  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Component {...pageProps} />
    </ChakraProvider>)
}

export default MyApp
