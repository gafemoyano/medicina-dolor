import React from "react"
import Link from "gatsby-link"
import william from "./sportsmassage1.jpg"
import Separator from "../components/SectionSeparator"
import {
  primary,
  grey_darker,
  danger,
  white,
  grey_light
} from "../utils/colors"
import SectionSeparator from "../components/SectionSeparator"
const HeroSection = () => (
  <div
    css={{
      backgroundImage: `url('${william}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100wh",
      height: "100vh",
      display: "flex"
    }}
  >
    <div
      css={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        textAlign: "center"
      }}
    >
      <h1
        css={{
          color: white,
          lineHeight: "1",
          textTransform: "uppercase",
          fontSize: "3em",
          marginBottom: "1rem",
          textAlign: "center"
        }}
      >
        Clínica del Dolor
      </h1>
      <div css={{ display: "block", textAlign: "center", width: "100%" }}>
        <span
          css={{
            background: danger,
            display: "block",
            marginLeft: "40%",
            marginRight: "40%",
            marginTop: "1rem",
            marginBottom: "1.6rem",
            height: "4px",
            maxWidth: "20%"
          }}
        />
      </div>

      <h3
        css={{
          color: white,
          lineHeight: "1",
          marginBottom: "40px",
          fontSize: "2rem",
          display: "block",
          fontWeight: "normal",
          textAlign: "center"
        }}
      >
        <span>Quiropráxis</span>
      </h3>
      <Link
        to="#contacto"
        css={{
          textTransform: "uppercase",
          color: white,
          padding: "20px",
          border: "1px solid white",
          textDecoration: "none",
          margin: "1rem 5rem",
          ":hover": {
            backgroundColor: primary,
            borderColor: primary,
            color: grey_light
          }
        }}
      >
        Sacar una Cita
      </Link>
    </div>
  </div>
)

export default HeroSection
