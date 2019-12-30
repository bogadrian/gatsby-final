import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageIndex = () => {
  const data = useStaticQuery(graphql`
    query {
      index: file(relativePath: { eq: "code7.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 600, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.index.childImageSharp.fluid} />
}

export default ImageIndex
