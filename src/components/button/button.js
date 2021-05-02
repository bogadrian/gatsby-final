import React from "react"
import buttonStyle from "./button.module.scss"
import { Link }from 'gatsby'

const Button = props => {
    const classes = [
        buttonStyle.btn,
        buttonStyle.btnwhite,
        buttonStyle.btnanimated,
        buttonStyle.btntext
      ].join(" ")
  return (
    <div>
    <Link to={props.link}>
      <button
        className={classes}
      >
        {props.text}
      </button>
      </Link>
    </div>
  )
}

export default Button