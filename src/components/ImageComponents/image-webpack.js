import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageWebpack = () => {
  const data = useStaticQuery(graphql`
    query {
      webpack: file(relativePath: { eq: "webpack.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.webpack.childImageSharp.fluid} />
}

export default ImageWebpack
