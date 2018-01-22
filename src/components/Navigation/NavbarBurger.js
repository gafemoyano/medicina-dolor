import React from "react"
import { rhythm, scale } from "../../utils/typography"
import { primary, grey_lighter, white } from "../../utils/colors"
import media from "../../utils/media"

class NavbarBurger extends React.Component {
  static defaultProps = {
    isActive: false
  }
  componentWillMount() {
    document.addEventListener("click", this.handleClick, false)
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick, false)
  }

  handleClick = e => {
    if (!this.node.contains(e.target)) {
      this.props.onActiveChange(false)
    } else {
      this.props.onActiveChange(!this.props.isActive)
    }
  }
  render() {
    const { isActive } = this.props
    return (
      <div
        ref={node => {
          this.node = node
        }}
        css={{
          cursor: "pointer",
          display: "block",
          height: rhythm(2.5),
          position: "relative",
          width: rhythm(2.5),
          marginLeft: "auth",
          color: white,
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
          [media.mobile]: {
            display: "none"
          }
        }}
      >
        <span
          css={{
            backgroundColor: "currentColor",
            display: "block",
            height: "1px",
            left: "calc(50% - 8px)",
            position: "absolute",
            transformOrigin: "center",
            transitionDuration: "86ms",
            transitionProperty: "background-color, opacity, -webkit-transform",
            transitionProperty: "background-color, opacity, transform",
            transitionProperty:
              "background-color, opacity, transform, -webkit-transform",
            transitionTimingFunction: "ease-out",
            width: "16px",
            top: "calc(50% - 6px)",
            transform: isActive && "translateY(5px) rotate(45deg)"
          }}
        />
        <span
          css={{
            backgroundColor: "currentColor",
            display: "block",
            height: "1px",
            left: "calc(50% - 8px)",
            position: "absolute",
            transformOrigin: "center",
            transitionDuration: "86ms",
            transitionProperty: "background-color, opacity, -webkit-transform",
            transitionProperty: "background-color, opacity, transform",
            transitionProperty:
              "background-color, opacity, transform, -webkit-transform",
            transitionTimingFunction: "ease-out",
            width: "16px",
            top: "calc(50% - 1px)",
            display: isActive && "none"
          }}
        />
        <span
          css={{
            backgroundColor: "currentColor",
            display: "block",
            height: "1px",
            left: "calc(50% - 8px)",
            position: "absolute",
            transformOrigin: "center",
            transitionDuration: "86ms",
            transitionProperty: "background-color, opacity, -webkit-transform",
            transitionProperty: "background-color, opacity, transform",
            transitionProperty:
              "background-color, opacity, transform, -webkit-transform",
            transitionTimingFunction: "ease-out",
            width: "16px",
            top: "calc(50% + 4px)",
            transform: isActive && "translateY(-5px) rotate(-45deg)"
          }}
        />
      </div>
    )
  }
}

export default NavbarBurger
