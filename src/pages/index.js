import React from 'react';
import { graphql } from 'gatsby';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`;

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
  {
    meme(where: { id: "cjke2xlf9nhd90953khilyzja" }) {
      photo {
        url(
          transformation: {
            image: { resize: { width: 600, height: 600, fit: crop } }
          }
        )
      }
    }
  }
`;

export default ({
  data: {
    rickAndMorty: { character },
  },
}) => {
  const { loading, error, data } = useQuery(APOLLO_QUERY);

  return (
    <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
      <h1>{character.name} With His Friend Sara</h1>
      <p>
        Rick & Morty API data loads at build time. Sara Vieira’s meme API loads
        at runtime.
      </p>
      <div>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: 300 }}
        />

        {loading && <p>Loading Sara...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && data.meme && data.meme.photo && (
          <img
            src={data.meme.photo.url}
            alt="Sara Vieira"
            style={{ maxWidth: 300 }}
          />
        )}
      </div>
    </div>
  );
};
