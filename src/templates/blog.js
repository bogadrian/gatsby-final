import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import blogStyle from "./blog.module.scss"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className={blogStyle.container}>
        <Link to="/">Back Home</Link>
        <p>{post.frontmatter.date}</p>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
