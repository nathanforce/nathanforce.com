import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

const FlexHeader = styled.header`
    display: flex;
    padding: 1rem;
    color: white;
`;

const NavItem = styled.li`
    font-family: 'Sarala';
    text-transform: uppercase;
    padding: 0 1rem;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    color: black;
`;

const Header = () => (
    <FlexHeader>
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
    </FlexHeader>
);

export default Header;
