import React from 'react';

export const Subtext = ({ style, ...props }) => (
  <span
    style={{
      fontSize: 12,
      color: '#aaa',
      ...style,
    }}
    {...props}
  />
);
