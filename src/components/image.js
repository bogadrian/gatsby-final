import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query Astronaut {
      astronaut: file(relativePath: { eq: "imggatsby.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 350, maxHeight: 200, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data.astronaut.childImageSharp.fluid)
  return <Img fluid={data.astronaut.childImageSharp.fluid} />
}

export default Image
