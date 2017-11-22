import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Container from '../components/Container';
import Header from '../components/Header';

// import './index.css';

const TemplateWrapper = ({ children }) => (
    <div style={{ minHeight: '100vh' }}>
        <Helmet
            title="Nathan Arick Force"
            meta={[
                { name: 'description', content: 'Nathan Force' },
                {
                    name: 'keywords',
                    content: 'javascript, developer, brooklyn, new york, react'
                }
            ]}
        />
        <Header />
        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
