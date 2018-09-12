import React from 'react';
import RandomGradient from '../components/RandomGradient';
import WordBank from '../components/WordBank';
import Social from '../components/Social';
import { Layout } from '../components/Layout';
import { Text } from '../components/Text';
import { Heading } from '../components/Heading';
import { theme } from '../theme';
import { InitialsBox } from '../components/InitialsBox';
import GatsbyImage from 'gatsby-image';
import { graphql } from 'gatsby';

const IndexPage = props => (
  <Layout>
    <div>
      <div>
        <InitialsBox
          image={
            <GatsbyImage sizes={props.data.fileName.childImageSharp.sizes} />
          }
        >
          NF
        </InitialsBox>
      </div>
      <div css={{ marginTop: '1rem' }}>
        <div>
          <Heading component="h1">Nathan Force</Heading>
          <Text css={{ maxWidth: '70ch' }}>
            Hello! I am a Javascript developer in Brooklyn, NY working to write
            clean code and create simple, usable web experiences. Give me a
            shout at{' '}
            <a
              style={{ color: '#1da1f2', textDecoration: 'none' }}
              title="Nathan Force's Twitter"
              href="https://twitter.com/ForceTheIssue"
            >
              @ForceTheIssue
            </a>{' '}
            and let's build interesting stuff!
          </Text>
        </div>

        <WordBank
          style={{ color: theme.color.darkGray, fontSize: '.875rem' }}
          words={['Javascript', 'UI', 'React', 'a11y']}
        />
        <div css={{ marginTop: '3rem' }}>
          <Social />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "milky-way.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
