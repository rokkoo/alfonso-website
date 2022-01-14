import '@fontsource/bellota/400.css';
import '@fontsource/raleway/400.css';
import '@fontsource/hind-siliguri/400.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    body: {
      color: mode('black', '#8f9ba8')(props),
      bg: mode('gray.100', '#141214')(props),
      fontSize: 'md',
    },
  }),
};

const fonts = {
  body: 'Raleway',
  heading: 'Hind Siliguri',
  h1: 'Bellota',
};

const theme = extendTheme({
  config,
  fonts,
  styles,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
