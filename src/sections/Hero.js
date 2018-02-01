import React from "react"
import william from "./sportsmassage1.jpg"
import { primary, grey_darker } from "../utils/colors"
const HeroSection = () => (
  <header
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
        alignItems: "center",
        margin: "auto"
      }}
    >
      <h1
        css={{
          color: "white",
          lineHeight: "1",
          textTransform: "uppercase",
          fontSize: "3em",
          marginBottom: "1rem",
          textAlign: "center"
        }}
      >
        Medicina del Dolor
      </h1>
      <h3
        css={{
          color: "white",
          lineHeight: "1",
          marginBottom: "40px",
          fontSize: "1.5em",
          display: "flex",
          fontWeight: "normal"
        }}
      >
        <span>Consultorio</span>
        <span css={{ color: primary, margin: "0 0.5rem" }}>/</span>
        <span>Medicina</span>
        <span css={{ color: primary, margin: "0 0.5rem" }}>/</span>
        <span>Tratamiento</span>
      </h3>
      <a
        href="#"
        css={{
          textTransform: "uppercase",
          color: "white",
          padding: "20px",
          border: "1px solid white",
          textDecoration: "none",
          ":hover": {
            backgroundColor: primary,
            borderColor: primary,
            color: grey_darker
          }
        }}
      >
        Contactar
      </a>
    </div>
  </header>
)

export default HeroSection
