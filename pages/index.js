import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import Navigation from '../components/Navigation';

export default function Home({ content }) {

  return (
    <div className='container'>
      <main>
        <div className='hero'>
          <div dangerouslySetInnerHTML={{ __html: content[0].content }} />
        </div>

        <Navigation page='home'/>
      </main>
    </div>
  )
}

export async function getStaticProps(){

  const GET_CONTENT = gql`
    query GetContent {
      pages(where: {title: "Home"}) {
        nodes {
          id
          content
          title
        }
      }
    }
  `

  const res = await client.query({
    query: GET_CONTENT
  });

  const content = res?.data?.pages?.nodes

  return {
    props: {
      content
    }
  }
}
