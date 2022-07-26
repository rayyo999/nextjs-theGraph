import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MoralisProvider } from 'react-moralis'
import Header from '../components/Header'
import '../styles/globals.css'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.studio.thegraph.com/query/31001/fcc_nft_marketplace/v0.0.3',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta name='description' content='NFT Marketplace' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MoralisProvider initializeOnMount={false}>
        <ApolloProvider client={client}>
          <Header />
          <Component {...pageProps} />
        </ApolloProvider>
      </MoralisProvider>
    </>
  )
}

export default MyApp
