import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageReact = () => {
  const data = useStaticQuery(graphql`
    query {
      react: file(relativePath: { eq: "react.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.react.childImageSharp.fluid} />
}

export default ImageReact
