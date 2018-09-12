import React from 'react';
import { theme } from '../theme';

export const Heading = ({ style, component: Component = 'div', ...props }) => (
  <Component
    css={{
      margin: 0,
      fontSize: '5rem',
      fontWeight: 600,
      letterSpacing: '.025ch',
      color: theme.color.black,
      lineHeight: 1.5,
      // textTransform: 'uppercase',
      ...style,
    }}
    {...props}
  />
);
