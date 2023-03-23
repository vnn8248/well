import Navigation from "../components/Navigation";
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';

export default function About({ copy }) {
    const aboutCopy = copy.find(i => i.title === 'About');


    return (
        <div className='container'>
          <main>
            <div className='hero'>
              <div className='inner' dangerouslySetInnerHTML={{ __html: aboutCopy.content }} />
              <button className='btn fade-4'>
                <a href='/resume.pdf' download='bi-nguyen-resume'>
                  Resume
                </a>
              </button>
            </div>
            <Navigation page='about' />
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
  }