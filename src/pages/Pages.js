import React from "react"

import Layout from "../components/layout/layout"

import SEO from "../components/seo"
import TagsList from "../components/TagsPages/TagsList"
import indexStyle from "./styles/index.module.scss"
import Button from "../components/button/button"
import Tags from "../templates/Tags"

const Pages = ({ location }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <div>
        <Tags data={location?.state?.data} />
        <div>
          <h1 className={indexStyle.haca1}>BLOG</h1>
          <div className={indexStyle.features}>
            <TagsList tag={location?.state?.t} />
            <div className={indexStyle.divdif} />
            <Button link={"/blog"} text={"More from blog"} />
            <div className={indexStyle.divdif} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Pages
