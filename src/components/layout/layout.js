import { useEffect } from "react"
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import "./layout.scss"
import DrowerToogleButton from "../drowerToggle/drower-toggle-button"
import Footer from "../footer/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  useEffect(() => {
    const f = async () => {
      try {
        const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")
        await deckdeckgoHighlightCodeLoader.defineCustomElements(window)
      } catch (err) {
        console.error(err)
      }
    }
    f()
  }, [])

  return (
    <div>
      <DrowerToogleButton />
      <Header
        siteTitle={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
