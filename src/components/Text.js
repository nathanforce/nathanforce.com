import React from 'react';
import { theme } from '../theme';

export const Text = ({ style, className, ...props }) => (
  <div
    css={[
      {
        fontSize: '1rem',
        color: theme.color.black,
        lineHeight: 1.5,
        maxWidth: '70ch',
        ...style,
      },
      className,
    ]}
    {...props}
  />
);
