import '../styles/index.css';
import '../styles/transition.css';
import Transition from '../components/Transition';
import { ApolloProvider } from '@apollo/client/react';
import { client } from '../lib/apollo';
import { Rokkitt } from 'next/font/google';
import Layout from '../components/Layout';

const rokkitt = Rokkitt({
  subsets: ['latin'],
  weight: [ '400', '700' ]
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Transition>
        <div className={rokkitt.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </Transition>
    </ApolloProvider>
    )
}

export default MyApp