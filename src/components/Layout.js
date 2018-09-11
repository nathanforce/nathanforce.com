import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';

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
    {children}
  </div>
);
