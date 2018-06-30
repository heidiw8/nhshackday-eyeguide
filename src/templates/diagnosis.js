// TODO
import React from "react";

export default ({ data }) => {

  const condition = data.markdownRemark;
  const children = condition.htmlAst.children
  // console.log({ children })
  const section = <div>{children.filter(node => { return (node.tagName === 'ol') })}</div>
  // console.log({ section })

  return (
    < div >
      <h1>{condition.frontmatter.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: condition.tableOfContents }} />

      <div dangerouslySetInnerHTML={{ __html: condition.html }} />
    </div >
  );
};

export const query = graphql`
  query conditionTreatmentGuidelines($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      tableOfContents
      headings {
        depth
        value
      }
      htmlAst
      html
      excerpt
    }
  }
`;

