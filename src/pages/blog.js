import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import blog from "./styles/blog.module.scss"
import ImageBlog from "../components/ImageComponents/image-blog"
import ButtonText from "../components/button-text/button-text"
import { graphql } from "gatsby"
const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Link to="/">Back Home</Link>
      <h1>Blog</h1>

      <ImageBlog />
      <div className={blog.blog}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id} className={blog.container}>
              <Link to={node.fields.slug}>
                <h1 className={blog.title}>{node.frontmatter.title}</h1>
              </Link>

              <p>{node.frontmatter.date}</p>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <ButtonText link={node.fields.slug} className={blog.btn} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
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
