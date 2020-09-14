import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import Head from 'next/head';
import Layout from '../resources/components/layout';
import withData from '../resources/utils/apollo';
import favicon from '../resources/assets/images/favicon.ico';
import '../resources/assets/css/style.scss';

const App = ({ Component, pageProps, apollo }) => {
    return (
        <ApolloProvider client={apollo}>
            <Head>
                <title>Code Khá Vui</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={favicon} />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    )
}

export default withData(App);