import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import Navigation from '../components/Navigation';

export default function Projects({ copy }) {
    const projectsCopy = copy.find(i => i.title === 'Projects');
    
    return (
        <div className='container'>
          <main>
            <div className='projects'>
              <h2 className='fade-1'>
                Projects I've done -
              </h2>
              <div className='grid' dangerouslySetInnerHTML={{ __html: projectsCopy.content }} />
            </div>
            <Navigation page='projects' />
          </main>
        </div>  
    )
};

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
  };