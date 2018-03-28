import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';

const NextPage = () => {
  return (
    <Layout>
      <Header as="h2">Next Page</Header>
      <p>Hello to Next page!!!</p>
    </Layout>
  );
};

export default NextPage;