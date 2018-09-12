import React from 'react';
import { theme } from '../theme';

export const Heading = ({
  style,
  className,
  component: Component = 'div',
  ...props
}) => (
  <Component
    css={[
      {
        margin: 0,
        fontWeight: 600,
        letterSpacing: '.025ch',
        color: theme.color.black,
        fontSize: '2.5rem',
        [theme.media.medium]: {
          fontSize: '5rem',
        },
        ...style,
      },
      className,
    ]}
    {...props}
  />
);
