import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "imggatsby.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <SEO title="About" />
      <Image fluid={data.image.childImageSharp.fluid} />
      <h1>About</h1>
      <p>Welcome to about</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default About
