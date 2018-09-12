import React from 'react';
import { theme } from '../theme';

export const InitialsBox = ({ children, image }) => (
  <div
    css={{
      //   transform: 'rotate(45deg)',
      color: 'white',
      display: 'inline-block',
    }}
  >
    <div
      style={{
        background: 'white',
        color: 'tomato',
      }}
    >
      <div
        css={{
          userSelect: 'none',
          fontWeight: '300',
          letterSpacing: 'inherit',
          margin: 0,
          position: 'relative',
          overflow: 'hidden',
          width: '80vw',
          height: '80vw',
          maxWidth: 200,
          maxHeight: 200,
          [theme.media.medium]: {
            maxWidth: 'none',
            maxHeight: 'none',
            width: '15vw',
            height: '15vw',
            minWidth: 200,
            minHeight: 200,
          },
        }}
      >
        <div
          css={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          {image}
        </div>
        <div
          css={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            // transform: 'rotate(-45deg)',
            fontSize: '120px',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  </div>
);
