import React from "react"
import { Link } from "gatsby"
import buttonTextStyle from "./button-text.module.scss"

const ButtonText = props => {
  return (
    <Link to={props.link} className={buttonTextStyle.btnText}>
      Read More &rarr;
    </Link>
  )
}

export default ButtonText
