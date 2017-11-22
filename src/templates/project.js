import React from 'react';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div className="max-width-3 mx-auto px2 sm-px3 pb4">
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    );
};

export const query = graphql`
    query ProjectQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
