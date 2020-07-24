import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
