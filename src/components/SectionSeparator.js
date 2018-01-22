import React from "react"
import { primary } from "../utils/colors"
import { merge } from "glamor"

const baseStyles = {
  borderWidth: "3px",
  maxWidth: "50px",
  marginTop: "20px",
  marginBottom: "20px",
  border: 0,
  height: "3px",
  marginLeft: "auto",
  marginRight: "auto"
}
const SectionSeparator = ({ css, ...props }) => (
  <hr {...props} {...merge(css, baseStyles)} />
)

export default SectionSeparator
