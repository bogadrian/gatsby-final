import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageCss = () => {
  const data = useStaticQuery(graphql`
    query {
      css: file(relativePath: { eq: "css3.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.css.childImageSharp.fluid} />
}

export default ImageCss
