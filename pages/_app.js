import 'zenscroll';
import {ColorModeProvider, CSSReset, ThemeProvider} from '@chakra-ui/core';
import Head from 'next/head';

const App = ({Component, pageProps}) =>
    <ThemeProvider>
        <Head>
            <title>{'Dominic Sherman'}</title>
            <link href="/favicon.ico" />
        </Head>
        <ColorModeProvider value={'light'}>
            <Component {...pageProps} />
            <CSSReset />
        </ColorModeProvider>
    </ThemeProvider>;

export default App;
