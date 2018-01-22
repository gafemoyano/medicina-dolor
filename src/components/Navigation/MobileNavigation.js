import React from "react"
import Link from "gatsby-link"
import { rhythm, scale } from "../../utils/typography"
import { primary, grey_lighter, white } from "../../utils/colors"
import media from "../../utils/media"

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
        }
      }}
    >
      {children}
    </Link>
  </li>
)

const MobileNavigation = () => (
  <nav
    css={{
      background: primary,
      marginBottom: rhythm(1 / 2),
      height: rhythm(2.5),
      zIndex: "1",
      left: 0,
      right: 0,
      borderBottom: `1px solid ${grey_lighter}`
    }}
  >
    <div
      css={{
        margin: "0 auto",
        paddingLeft: rhythm(3 / 4),
        paddingRight: rhythm(3 / 4),
        display: `flex`,
        flexDirection: "row",
        alignItems: `center`,
        width: `100%`,
        height: `100%`
      }}
    >
      <h1
        css={{
          ...scale(2 / 5),
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
          Medicina del Dolor
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
    </div>
  </nav>
)

export default MobileNavigation
