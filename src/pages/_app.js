import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../style.css';

/* Component Prop -> The active page
  pageProps -> An object with the initial props that were
  preloaded for your page.
  Its gonna be a empty object if the page is not using getInitialProps
*/

/*
  Warning => Adding a getInitialProps here will disable
  Automatic Static Optimization
*/

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
                    <link
                        rel="stylesheet"
                        type="text/css"
                        charset="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp;
