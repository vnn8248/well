import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import Navigation from '../components/Navigation';

export default function Home({ copy, media }) {
  const heroCopy = copy.find(i => i.title === 'Home');

  return (
    <div className="container">
      <main>
        <div className='hero'>
          <div dangerouslySetInnerHTML={{ __html: heroCopy.content }} />
        </div>

        <Navigation page='home'/>
      </main>
    </div>
  )
}

export async function getStaticProps(){

  const GET_COPY = gql`
    query GetCopy {
      pages {
        nodes {
          id
          content
          title
        }
      }
    }
  `

  const copyRes = await client.query({
    query: GET_COPY
  });

  const copy = copyRes?.data?.pages?.nodes

  return {
    props: {
      copy
    }
  }
}
