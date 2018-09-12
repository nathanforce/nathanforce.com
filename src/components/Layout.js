import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';

import '../global.css';
import { theme } from '../theme';

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
        [theme.media.medium]: {
          width: '65%',
        },
      }}
    >
      {children}
    </div>
  </div>
);
