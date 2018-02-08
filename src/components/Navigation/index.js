import React from "react"
import Link from "gatsby-link"
import { rhythm, scale } from "../../utils/typography"
import {
  primary,
  grey_lighter,
  white,
  grey_dark,
  grey_darker,
  grey
} from "../../utils/colors"
import media from "../../utils/media"
import NavbarBurger from "./NavbarBurger"
import FluidContainer from "../FluidContainer"

const NavItem = ({ linkTo, children }) => (
  <li
    css={{
      display: `inline-block`,
      margin: 0
    }}
  >
    <Link
      to={linkTo}
      css={{
        boxSizing: `border-box`,
        display: `inline-block`,
        color: primary,
        fontWeight: "bold",
        fontSize: rhythm(2 / 3),
        textDecoration: `none`,
        margin: "0 1rem",
        letterSpacing: `0.03em`,
        lineHeight: `calc(${rhythm(2.5)} - 4px)`,
        padding: `4px ${rhythm(0.5)} 0`,
        position: `relative`,
        top: 0,
        transition: `color .15s ease-out`,
        textTransform: "uppercase",
        opacity: 0.9,
        "&:hover": {
          opacity: 1,
          color: white
        },
        "&:last-child": {
          paddingRight: "0px"
        }
      }}
    >
      {children}
    </Link>
  </li>
)

class Navigation extends React.Component {
  state = {
    isMenuActive: false
  }
  componentDidMount() {
    document.addEventListener("click", this.handleClick, false)
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick, false)
  }

  handleMenuActive = isActive => {
    this.setState({ isMenuActive: isActive })
  }

  render() {
    return (
      <nav
        css={{
          zIndex: "1",
          height: rhythm(3),
          left: 0,
          right: 0,
          background: grey_dark,
          boxShadow: "0 6px 6px -6px #222222"
        }}
      >
        <FluidContainer css={{ height: "100%" }}>
          <div
            css={{
              margin: "0 auto",
              paddingRight: 0,
              display: `flex`,
              flexDirection: "row",
              width: `100%`,
              height: `100%`,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <h1
              css={{
                ...scale(1 / 8),
                display: `block`,
                margin: 0,
                verticalAlign: `middle`,
                textTransform: "uppercase",
                margin: "0",
                margin: 0,
                [media.tablet]: { ...scale(1 / 4) }
              }}
            >
              <Link
                to="/"
                css={{
                  display: "flex",
                  color: primary,
                  flexWrap: "nowrap",
                  justifiContent: "center",
                  alignItems: "center",
                  textDecoration: "none",
                  marginRight: rhythm(0.5),
                  transition: "all .1s ease-in"
                }}
              >
                <i className="fab fa-medrt fa-3x" />
                <span
                  css={{
                    margin: "0 1rem",
                    fontSize: rhythm(1.2),
                    fontWeight: "bold"
                  }}
                >
                  Medicina del Dolor
                </span>
              </Link>
            </h1>
            <ul
              css={{
                display: "none",
                textAlign: "right",
                [media.tablet]: {
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: 0,
                  padding: 0,
                  listStyle: "none"
                }
              }}
            >
              <NavItem linkTo="#tratamiento">Tratamiento</NavItem>
              <NavItem linkTo="#tecnicas">Técnicas</NavItem>
              <NavItem linkTo="#contacto">Contacto</NavItem>
            </ul>
            <NavbarBurger
              isActive={this.state.isMenuActive}
              onActiveChange={this.handleMenuActive}
            />
          </div>
          <div
            css={{
              display: this.state.isMenuActive ? "block" : "none",
              width: "100%",
              overflow: "hidden",
              backgroundColor: grey,
              position: "absolute",
              right: 0,
              "& a": {
                display: "block",
                float: "right",
                clear: "right",
                textAlign: "right",
                color: white,
                lineHeight: `calc(${rhythm(3 / 2)} - 4px)`,
                padding: `6px ${rhythm(1.25)}`,
                textDecoration: "none",
                borderBottom: `1px solid ${grey_lighter}`,
                width: "100%",
                "&:hover": { color: grey_lighter }
              }
            }}
          >
            <Link to="#tratamiento">Tratamiento</Link>
            <Link to="#tecnicos">Tecnicas</Link>
            <Link to="#contacto">Contacto</Link>
          </div>
        </FluidContainer>
      </nav>
    )
  }
}
export default Navigation
