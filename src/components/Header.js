import React from 'react';
import { Link } from 'gatsby';

const NavItem = ({ children }) => (
  <li
    style={{
      fontFamily: 'Sarala',
      textTransform: 'uppercase',
      padding: '0 1rem',
      textDecoration: 'none',
      color: 'black',
    }}
  >
    {children}
  </li>
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
        <NavItem>
          <Link to="/">Me</Link>
        </NavItem>
        <NavItem>
          <Link to="/projects">Projects</Link>
        </NavItem>
        <NavItem>
          <Link to="/blog">Blog</Link>
        </NavItem>
      </ul>
    </nav>
  </header>
);

export default Header;
