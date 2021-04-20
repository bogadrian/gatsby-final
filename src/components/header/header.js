import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import headerStyle from "./header.module.scss"
import BackgroundImage from "gatsby-background-image"
import DrowerButtonToggle from "../drowerToggle/drower-toggle-button"
import SiteDrower from "../siteDrower/SiteDrower"
import BackDrop from "../backdrop/backdrop"

var prevScrollpos = window.pageYOffset
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0"
  } else {
    document.getElementById("header").style.top = "-100px"
  }
  prevScrollpos = currentScrollPos
}

const Header = ({ siteTitle, description }) => {
  let [siteDrowerOpen, setSiteDrowerOpen] = useState(false)

  function toggle() {
    setSiteDrowerOpen(prevState => {
      return !prevState
    })
  }

  const data = useStaticQuery(graphql`
    {
      header: file(relativePath: { eq: "landscape2.jpg" }) {
        childImageSharp {
          fluid(
            quality: 90
            maxWidth: 1000
            maxHeight: 600
            duotone: { highlight: "#f00e2e", shadow: "#192550", opacity: 20 }
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  let siteDrower
  let backDrower

  if (siteDrowerOpen) {
    siteDrower = <SiteDrower close={toggle} />
    backDrower = <BackDrop close={toggle} />
  }
  return (
    <header className={headerStyle.header} id="header">
      <BackgroundImage
        fluid={data.header.childImageSharp.fluid}
        backgroundcolor={"#777"}
      >
        <div className={headerStyle.flex}>
          <div className={headerStyle.links}>
            <h1>
              <Link className={headerStyle.hh} to="/">
                {siteTitle}
              </Link>
            </h1>
            <h3 className={headerStyle.hhh}>{description}</h3>
          </div>

          <div className={headerStyle.links}>
            <DrowerButtonToggle drwoerClickHandler={setSiteDrowerOpen} />
            {siteDrower}
            {backDrower}
          </div>
        </div>
      </BackgroundImage>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  description: ``,
}

export default Header
