import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
  uri: 'https://localhost:4000',
  cache: new InMemoryCache(),
});

const Chat = () => {
  return <div>Testing Chat</div>;
};

export default () => {
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>;
};
