import React from "react"
import PropTypes from "prop-types"
import { mobile, tablet, desktop } from "../utils/media"
import { merge } from "glamor"

let styles = {
  margin: "0 auto",
  paddingLeft: "1.2rem",
  paddingRight: "1.2rem",
  marginRight: "auto",
  marginLeft: "auto",
  boxSizing: "border-box"
}

const Fluid = ({ css, children, ...props }) => (
  <div {...props} {...merge(css, styles)}>
    {children}
  </div>
)

export default Fluid
