import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>
        Guidelines
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Categories</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
            <h3>
              {node.frontmatter.title}{" "}
            </h3>
          </Link>
          <span> updated: {node.frontmatter.date}</span>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;