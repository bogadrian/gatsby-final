import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageRn = () => {
  const data = useStaticQuery(graphql`
    query {
      html: file(relativePath: { eq: "react-native.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.html.childImageSharp.fluid} />
}

export default ImageRn
