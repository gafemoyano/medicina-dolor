import React from "react"
import PropTypes from "prop-types"
import { mobile, tablet, desktop } from "../utils/media"
import { merge } from "glamor"

let styles = {
  margin: "0 auto",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  marginRight: "auto",
  marginLeft: "auto",
  boxSizing: "border-box",
  [mobile]: {
    width: "520px"
  },
  [tablet]: {
    width: "720px"
  },
  [desktop]: {
    width: "1170px"
  }
}

const Container = ({ css, children, ...props }) => (
  <div {...props} {...merge(css, styles)}>
    {children}
  </div>
)

export default Container
