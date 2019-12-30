import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageFirebase = () => {
  const data = useStaticQuery(graphql`
    query {
      firebase: file(relativePath: { eq: "firebase.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.firebase.childImageSharp.fluid} />
}

export default ImageFirebase
