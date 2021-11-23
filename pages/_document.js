import Document, { Html, Main, NextScript, Head } from "next/document";

const MyDocument = () => {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export const getInitialProps = async (context) => {
    const initialProps = await Document.getInitialProps(context);
    return ({
        ...initialProps
    })
}

export default MyDocument
