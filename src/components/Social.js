import React from 'react';

const Social = () => (
  <div className="flex justify-center">
    <div className="mx2 p1">
      <a href="https://github.com/nathanforce" title="Nathan Force's GitHub">
        <img
          style={{ margin: 0 }}
          width="30"
          height="30"
          src={require('../images/GitHub-Mark-32px.png')}
          alt="github"
        />
      </a>
    </div>
    <div className="mx2 p1">
      <a
        href="https://www.instagram.com/nathanforce"
        title="Nathan Force's Instagram"
      >
        <img
          style={{ margin: 0 }}
          width="30"
          height="30"
          src={require('../images/glyph-logo_May2016.png')}
          alt="instagram"
        />
      </a>
    </div>
  </div>
);

export default Social;
