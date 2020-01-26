import Document, { Html, Main, Head, NextScript } from 'next/document'

/*  
    Head => Where you are able to add things like meta tags, title, style, etc 
    Main => All the components logic 
    NextScript => Where you are able add custom scripts globally (Like GA, Tag Manager, etc)
*/

/* Document is only rendered in the server, event handlers 
   like onClick, doesn't work */

export default class MyDocument extends Document { 
    render(){ 
        return ( 
            <Html>
                <Head>
                    <meta name="description" content="Amazon Next is application based on Amazon using the NextJS framework"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}