import React from "react"
import backDropStyle from "./backdrop.module.scss"
const BackDrop = props => {
  return (
    <button
      className={backDropStyle.layer}
      onClick={props.close}
      onKeyPress={props.close}
    />
  )
}
export default BackDrop
