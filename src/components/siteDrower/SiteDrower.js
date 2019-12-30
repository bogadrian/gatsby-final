import React from "react"
import siteDrowerStyle from "./siteDrower.module.scss"
import { Link } from "gatsby"

const SiteDrower = props => {
  return (
    <div className={siteDrowerStyle.siteMain}>
      <nav>
        <div className={siteDrowerStyle.siteX} onClick={props.close}>
          X
        </div>
        <div className={siteDrowerStyle.siteDrowerItems}>
          <ul className={siteDrowerStyle.siteUl}>
            <li className={siteDrowerStyle.siteLi}>
              <Link to="/">Home</Link>
            </li>
            <li className={siteDrowerStyle.siteLi}>
              <Link to="/about/">About</Link>
            </li>
            <li className={siteDrowerStyle.siteLi}>
              <Link to="/blog/">Blog</Link>
            </li>
            <li className={siteDrowerStyle.siteLi}>
              <Link to="/portfolio/">Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default SiteDrower
