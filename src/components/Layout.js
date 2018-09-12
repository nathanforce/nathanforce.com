import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';

import '../global.css';

export const Layout = ({ children }) => (
  <div style={{ minHeight: '100vh' }}>
    <Helmet
      title="Nathan Arick Force"
      meta={[
        { name: 'description', content: 'Nathan Force' },
        {
          name: 'keywords',
          content: 'javascript, developer, brooklyn, new york, react',
        },
      ]}
    />
    <Header />
    <div
      css={{
        padding: '1rem',
        margin: '4rem auto',
        width: '65%',
      }}
    >
      {children}
    </div>
  </div>
);
