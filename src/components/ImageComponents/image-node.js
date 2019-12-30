import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageNode = () => {
  const data = useStaticQuery(graphql`
    query {
      node: file(relativePath: { eq: "node.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.node.childImageSharp.fluid} />
}

export default ImageNode
