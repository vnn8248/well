import Navigation from "../components/Navigation";
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';

export default function About({ content }) {

    return (
        <div className='container'>
          <main>
            <div className='hero'>
              <div className='inner' dangerouslySetInnerHTML={{ __html: content[0].content }} />
              <button className='btn fade-4'>
                <a href='/bi-nguyen-resume.pdf' download='bi-nguyen-resume'>
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

    const GET_CONTENT = gql`
      query GetContent {
        pages(where: {title: "About"}) {
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