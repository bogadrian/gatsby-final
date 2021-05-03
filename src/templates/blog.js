import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import blogStyle from "./blog.module.scss"
import SEO from "../components/seo"
import blog from "../pages/styles/blog.module.scss"

const tagsArray = []
export default ({ data }) => {
  const post = data.markdownRemark
  const tag = data.markdownRemark.frontmatter.tags
  if (tag) tagsArray.push(tag)

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className={blogStyle.container}>
        <div className={blogStyle.tagsContainerPost}>
          <Link to="/">Back Home</Link>
          {tagsArray
            .filter((tag, i) => tagsArray.indexOf(tag) === i)
            .map(t => {
              return (
                <p key={t} className={blogStyle.tags}>
                  {t}
                </p>
              )
            })}
        </div>
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
        tags
      }
    }
  }
`
