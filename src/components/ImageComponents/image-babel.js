import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageBabel = () => {
  const data = useStaticQuery(graphql`
    query {
      babel: file(relativePath: { eq: "babel.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.babel.childImageSharp.fluid} />
}

export default ImageBabel
