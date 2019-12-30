import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      general: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 350, maxHeight: 200, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.general.childImageSharp.fluid} />
}

export default Image
