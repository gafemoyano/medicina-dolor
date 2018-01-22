import React from "react"
import Link from "gatsby-link"
import { rhythm, scale } from "../../utils/typography"
import { primary, grey_lighter, white } from "../../utils/colors"
import media from "../../utils/media"
import NavbarBurger from "./NavbarBurger"
import Container from "../Container"

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
        color: white,
        textDecoration: `none`,
        letterSpacing: `0.03em`,
        lineHeight: `calc(${rhythm(2.5)} - 4px)`,
        padding: `4px ${rhythm(0.5)} 0`,
        position: `relative`,
        top: 0,
        transition: `color .15s ease-out`,
        opacity: 0.9,
        "&:hover": {
          opacity: 1
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
  componentWillMount() {
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
          background: primary,
          boxShadow: "0 6px 6px -6px #222222"
        }}
      >
        <Container css={{ height: "100%" }}>
          <div
            css={{
              margin: "0 auto",
              paddingRight: 0,
              display: `flex`,
              flexDirection: "row",
              alignItems: `center`,
              width: `100%`,
              height: `100%`
            }}
          >
            <h1
              css={{
                ...scale(1 / 5),
                display: `block`,
                flex: 1,
                margin: 0,
                verticalAlign: `middle`
              }}
            >
              <Link
                to="/"
                css={{
                  color: "white",
                  textDecoration: "none",
                  marginRight: rhythm(0.5)
                }}
              >
                William Guitierrez - Medicina del Dolor
              </Link>
            </h1>
            <ul
              css={{
                display: "none",
                [media.mobile]: {
                  flexDirection: "row",
                  display: "flex",
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
              backgroundColor: primary,
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
        </Container>
      </nav>
    )
  }
}
export default Navigation
