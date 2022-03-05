import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as ga from '../lib/analytics/';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(
    () => {
      const handleRouteChange = (url) => {
        ga.pageview(url);
      };
      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    },
    [ router.events ]
  );

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
