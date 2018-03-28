import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1, centerSubcontent, divider } from './Layout.css';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
          React-Webpack-Boilerplat
        </Header>
      </Link>
      <div className={centerSubcontent}>
        {children}
      </div>
      <div className={divider}>
        <Divider />
      </div>
      <p className={pullRight}>
        <a href="https://github.com/janaka120/">
          <Icon name="github" color="black"/> janaka Rathnayake
        </a>
      </p>
    </Container>
  );
};

export default Layout;