import React from 'react';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'next/app';
import Head from 'next/head';

import { store, persistor } from '~/store';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '~/styles/style.css';

/* Component Prop -> The active page
  pageProps -> An object with the initial props that were
  preloaded for your page.
  Its gonna be a empty object if the page is not using getInitialProps
*/

/*
  Warning => Adding a getInitialProps here will disable
  Automatic Static Optimization
*/
dynamic(() => import('~/config/ReactotronConfig'), { ssr: false });

class MyApp extends App {
    componentDidCatch(error) {
        console.log(error);
        /* Sentry capture exception here */
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title> Amazon Next </title>
                </Head>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <Component {...pageProps} />
                    </PersistGate>
                </Provider>
            </>
        );
    }
}

export default MyApp;
