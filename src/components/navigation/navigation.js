import React from "react"
import { Link } from "gatsby"
import navStyle from "./navigation.module.scss"
import DrowerButtonToggle from "./drower-toggle-button"

const Navigation = () => {
  return (
    <nav className={navStyle.nav__navigation}>
      <div>
        <DrowerButtonToggle />
      </div>
      <div className={navStyle.spacer} />
      <div className={navStyle.nav__navigationItems}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/portfolio/">Portofolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
