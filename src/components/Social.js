import React from 'react'
import styled from 'styled-components'

const Icon = styled.img`
  width: 30px;
  margin: 0;
`

const Social = () => (
  <div className="flex justify-center">
    <div className="mx2 p1">
      <a href="https://github.com/nathanforce" title="Nathan Force's GitHub">
        <Icon
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
        <Icon
          width="30"
          height="30"
          src={require('../images/glyph-logo_May2016.png')}
          alt="instagram"
        />
      </a>
    </div>
  </div>
)

export default Social
