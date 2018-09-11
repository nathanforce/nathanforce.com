import React from 'react';
import { Subtext } from '../components/Text';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';

const Card = ({ style, ...props }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      ...style,
    }}
    {...props}
  />
);

const Projects = ({ data }) => (
  <Layout>
    <div className="md-px4 px2 pt0">
      <h1 className="center mt2">Projects</h1>
      <div className="max-width-3 mx-auto center">
        Below are some of the projects I've worked on in the past or actively
        work on now. Unfortunately, most of my current work is closed off behind
        the Corporate Veil of Secrecy™.
      </div>
      <div className="max-width-3 mx-auto">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link
            to={node.fields.slug}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            <Card className="px2 pt2 pb1 my3" key={node.id}>
              <div
                className="flex items-center justify-center"
                style={{ height: '200px' }}
              >
                <h2
                  className="m0 center h4 sm-h2"
                  style={{
                    color: '#666',
                    mixBlendMode: 'color-burn',
                  }}
                >
                  {node.frontmatter.title}
                </h2>
              </div>
              <p className="py2" style={{ color: '#666', fontSize: '.875rem' }}>
                {node.excerpt}
              </p>
              <Subtext className="self-start" style={{ marginTop: 'auto' }}>
                {node.frontmatter.tags}
              </Subtext>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
);

export default Projects;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            icon
          }
          excerpt
        }
      }
    }
  }
`;
