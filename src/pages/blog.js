import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h1>{node.frontmatter.title}</h1>
              </Link>
              <p>{node.excerpt}</p>
              <p>{node.frontmatter.date}</p>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
      );
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
export default Blog
