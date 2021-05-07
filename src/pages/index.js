import React from "react"

import Layout from "../components/layout/layout"
import ImageIndex from "../components/ImageComponents/image-index"
import SEO from "../components/seo"
import BlogPosts3 from "../components/3blogPosts/blogPosts"

import indexStyle from "./styles/index.module.scss"
import Button from "../components/button/button"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={indexStyle.image}>
        <ImageIndex />
      </div>

      <div>
        <h1 className={indexStyle.haca1}>BLOG</h1>
        <div className={indexStyle.features}>
          <BlogPosts3 />
          <div className={indexStyle.divdif} />
          <Button link={"/blog"} text={"More from blog"} />
          <div className={indexStyle.divdif} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
