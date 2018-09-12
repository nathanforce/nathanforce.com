import React from 'react';
import { Text } from '../components/Text';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';
import { Heading } from '../components/Heading';
import { theme } from '../theme';
import RandomGradient from '../components/RandomGradient';

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

const GradientBackground = ({ className, ...props }) => {
  return (
    <RandomGradient
      render={({ left, right }) => (
        <div
          css={[
            {
              background: `linear-gradient(
                to right,
                ${left},
                ${right}
              )`,
            },
            className,
          ]}
          {...props}
        />
      )}
    />
  );
};

const Projects = ({ data }) => (
  <Layout>
    <div css={{ maxWidth: '75%', margin: '0 auto' }}>
      <Heading>Projects</Heading>
      <Text>
        Below are some of the projects I've worked on in the past or actively
        work on now. Unfortunately, most of my current work is closed off behind
        the Corporate Veil of Secrecy™.
      </Text>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link
            to={node.fields.slug}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            <Card className="px2 pt2 pb1 my3" key={node.id}>
              <GradientBackground
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '200px',
                }}
              >
                <Heading
                  style={{
                    color: '#666',
                    mixBlendMode: 'color-burn',
                    textTransform: 'uppercase',
                    fontSize: '2rem',
                  }}
                >
                  {node.frontmatter.title}
                </Heading>
              </GradientBackground>
              <div css={{ marginTop: '2rem' }}>
                <Text
                  style={{ color: theme.color.darkGray, fontSize: '.875rem' }}
                >
                  {node.excerpt}
                </Text>
              </div>
              <div css={{ marginTop: '2rem' }}>
                <Text
                  className="self-start"
                  style={{
                    marginTop: 'auto',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: theme.color.black,
                    fontSize: '.675rem',
                  }}
                >
                  {node.frontmatter.tags}
                </Text>
              </div>
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
