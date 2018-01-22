import React from "react"
import william from "../pages/consultorio.jpg"
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
          marginBottom: 0,
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
          fontWeight: "normal"
        }}
      >
        Consultorio de William Guitierrez
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
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.7)",
            color: "white"
          }
        }}
      >
        Contactar
      </a>
    </div>
  </header>
)

export default HeroSection
