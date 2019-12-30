import React from "react"
import footerStyle from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyle.container}>
      © {new Date().getFullYear()}, Built with GatsbyJs. Git Profile:
      <a href="https://github.com/bogadrian">. GitHub </a>
    </div>
  )
}

export default Footer
