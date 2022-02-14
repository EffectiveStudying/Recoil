import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Conduit</title>
            </Head>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </>
    );
}

export default MyApp;