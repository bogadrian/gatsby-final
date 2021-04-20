import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogPostsStyle from "./blogPosts3.module.scss"
import ButtonText from "../button-text/button-text"

const BlogPosts3 = () => {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <div>
      {data.allMarkdownRemark.edges.slice(0, 6).map(({ node }) => {
        return (
          <div key={node.id} className={blogPostsStyle.container}>
            <Link to={node.fields.slug}>
              <h1 className={blogPostsStyle.title}>{node.frontmatter.title}</h1>
            </Link>

            <p>{node.frontmatter.date}</p>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <ButtonText
              link={node.fields.slug}
              className={blogPostsStyle.btn}
            />
          </div>
        )
      })}
    </div>
  )
}

export default BlogPosts3
