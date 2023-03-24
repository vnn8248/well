import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import Navigation from '../components/Navigation';

export default function Projects({ content }) {
    
    return (
        <div className='container'>
          <main>
            <div className='projects'>
              <h2 className='fade-1'>
                Projects I've done -
              </h2>
              <div className='grid' dangerouslySetInnerHTML={{ __html: content[0].content }} />
            </div>
            <Navigation page='projects' />
          </main>
        </div>  
    )
};

export async function getStaticProps(){

    const GET_CONTENT = gql`
      query GetContent {
        pages(where: {title: "Projects"}) {
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
  };