import React, { Fragment } from "react"

import blog from "./blog.module.scss"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import { navigate } from "gatsby"

const colors = {
  React: "blue",
  JavaScript: "#FF8C00",
  ReactNative: "purple",
  MyPath: "#FF00FF",
  Docker: "#008080",
  Node: "#006400",
  MongoDb: "#4d0000",
}

const tagsArray = []

const Tags = ({ data }) => {
  const breakpoints = useBreakpoint()
  data?.forEach(({ node }) => {
    if (node?.frontmatter?.tags) {
      tagsArray.push(node?.frontmatter?.tags)
    }
  })
  return (
    <Fragment>
      <div className={blog.tagsContainer}>
        {tagsArray
          .filter((tag, i) => tagsArray.indexOf(tag) === i)
          .map(t => (
            <p
              key={t}
              className={blog.tags}
              style={{ backgroundColor: `${colors[t.split(" ").join("")]}` }}
              onClick={() => navigate("/Pages", { state: { t, data } })}
            >
              {t}
            </p>
          ))}
      </div>
    </Fragment>
  )
}

export default Tags
