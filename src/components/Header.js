import React from 'react';
import { Link } from 'gatsby';
import { Text } from './Text';
import { theme } from '../theme';
import { lighten } from 'polished';

const NavLink = ({ className, ...props }) => (
  <Link
    css={[
      {
        color: theme.color.black,
        transition: 'color 200ms ease-out',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 500,
        '&:hover': {
          color: lighten(0.2, theme.color.black),
        },
      },
      className,
    ]}
    {...props}
  />
);

const Header = () => (
  <header
    style={{
      display: 'flex',
      padding: '1rem',
      color: 'white',
    }}
  >
    <nav>
      <ul className="flex list-reset">
        <li css={{ margin: '0 1rem' }}>
          <NavLink to="/">Me</NavLink>
        </li>
        <li css={{ margin: '0 1rem' }}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li css={{ margin: '0 1rem' }}>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
