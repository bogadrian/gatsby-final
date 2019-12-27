import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from "./header.module.scss"

const Header = ({ siteTitle, description }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <div
          style={{
            fontSize: `1rem`,
            color: `red`,
            marginTop: `1rem`,
          }}
        >
          {" "}
          {description}
        </div>

        <div
          style={{
            display: `inline-block`,

            float: `right`,
            fontSize: `1rem`,
            color: `white`,
          }}
        >
          <Link
            activeClassName={headerStyle.active}
            style={{
              color: `white`,
              padding: `.5rem`,
              textDecoration: `none`,
            }}
            to="/about/"
          >
            Go to about
          </Link>
          <Link
            style={{
              color: `white`,
              padding: `.5rem`,
              textDecoration: `none`,
            }}
            to="/blog/"
          >
            Go to Blog
          </Link>
          <Link
            style={{
              color: `white`,
              padding: `.5rem`,
              textDecoration: `none`,
            }}
            to="/portofolio/"
          >
            Go Portofolio
          </Link>
        </div>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  description: ``,
}

export default Header
