import TechCard from "../components/TechCard";
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import Navigation from "../components/Navigation";

export default function Techs({ media }) {
    return (
      <div className='container'>
        <main>
          <div className='hero'>
            <div className='fade-1'>
              <h2 className=''>
                This site was built with -
              </h2>
              <div className='grid'>
                {
                  media.map(i => {
                    if (i.node.title === 'next-js' ||
                        i.node.title === 'apollo-graphql' ||
                        i.node.title === 'vercel' ||
                        i.node.title === 'wordpress'
                    ) {
                      return (
                        <TechCard key={i.node.id} item={i} />
                      )
                    }
                  })
                }
              </div>
            </div>
            <div className='fade-4'>
              <h2 className='title'>
                I also have experience using -
              </h2>
              <div className='grid'>
                {
                  media.map(i => {
                    if (i.node.title === 'node-js' ||
                        i.node.title === 'react-js' ||
                        i.node.title === 'aws' ||
                        i.node.title === 'linux'
                    ) {
                      return (
                        <TechCard key={i.node.id} item={i} />
                      )
                    }
                  })
                }
              </div>
            </div>
          </div>
        <Navigation page='techs' />
        </main>
      </div>
    )
};

export async function getStaticProps() {

  const GET_MEDIA = gql`
  query GetMedia {
    mediaItems {
      edges {
        node {
          id
          title
          altText
          sourceUrl
        }
      }
    }
  }
  `


  const mediaRes = await client.query({
    query: GET_MEDIA
  });

  const media = mediaRes?.data?.mediaItems?.edges

  return {
    props: {
      media
    }
  }
}