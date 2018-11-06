module.exports = {
  siteMetadata: {
    title: 'Gatsby With Apollo',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'RMAPI',
        fieldName: 'rickAndMorty',
        url: 'https://rickandmortyapi-gql.now.sh/',
      },
    },
  ],
};
