import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageGit = () => {
  const data = useStaticQuery(graphql`
    query {
      git: file(relativePath: { eq: "github.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.git.childImageSharp.fluid} />
}

export default ImageGit
