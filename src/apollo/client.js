import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://nx9zvp49q7.lp.gql.zone/graphql',
  fetch,
});
