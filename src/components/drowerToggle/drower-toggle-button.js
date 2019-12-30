import React from "react"
import drowerButtonStyle from "./drower-toggle-button.module.scss"

const DrowerToggleButton = ({ drwoerClickHandler }) => (
  <button
    className={drowerButtonStyle.toggleButton}
    onClick={drwoerClickHandler}
    onKeyPress={drwoerClickHandler}
  >
    <div className={drowerButtonStyle.toggle} />
    <div className={drowerButtonStyle.toggle} />
    <div className={drowerButtonStyle.toggle} />
  </button>
)
export default DrowerToggleButton
