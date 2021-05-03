import React from "react"

import Layout from "../components/layout/layout"
import ImageIndex from "../components/ImageComponents/image-index"
import SEO from "../components/seo"
import BlogPosts3 from "../components/3blogPosts/blogPosts"
import ReactTag from "../components/TagsPages/TagsList"
import indexStyle from "./styles/index.module.scss"
import Button from "../components/button/button"
import Tags from "../templates/Tags"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              title
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <ImageIndex />
      <Tags data={data.allMarkdownRemark.edges} />
      <div>
        <div>
          <h1 className={indexStyle.haca1}>BLOG</h1>
          <div className={indexStyle.features}>
            <BlogPosts3 />
            <div className={indexStyle.divdif} />
            <Button link={"/blog"} text={"More from blog"} />
            <div className={indexStyle.divdif} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
