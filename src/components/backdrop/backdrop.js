import React from "react"
import backDropStyle from "./backdrop.module.scss"
const BackDrop = props => (
  <div className={backDropStyle.layer} onClick={props.close} />
)
export default BackDrop
