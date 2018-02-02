import React from "react"
import { white, primary, grey_dark, grey_darker, dark } from "../utils/colors"
import { mobile, desktop } from "../utils/media"
import { rhythm } from "../utils/typography"
import Container from "../components/Container"
import SectionSeparator from "../components/SectionSeparator"

const styles = {
  contact: {
    padding: "100px 0",
    textAlign: "center",
    color: primary,
    borderTop: "1px solid rgba(0,0,0,0.15)",
    backgroundColor: grey_dark,
    paddingTop: "40px"
  },
  title: {
    fontWeighit: "400",
    letterSpacing: "0.05em"
  },
  column: {
    flex: 1
  },
  contact: {
    display: "block",
    paddingTop: "50px",
    [mobile]: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    },
    ["& svg"]: {
      marginRight: "15px"
    }
  }
}
const ContactSection = () => (
  <section
    id="contacto"
    css={{
      padding: "100px 0",
      textAlign: "center",
      color: primary,
      borderTop: "1px solid rgba(0,0,0,0.15)",
      backgroundColor: grey_dark,
      ["& a"]: {
        color: primary
      }
    }}
  >
    <h2
      css={{
        fontWeighit: "400",
        letterSpacing: "0.05em"
      }}
    >
      Contacto y Citas
    </h2>

    <SectionSeparator css={{ background: primary }} />
    <div css={styles.subtitleContainer}>
      <p
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "4rem",
          ["& p"]: {
            width: "100%",
            fontSize: rhythm(0.8),
            [desktop]: {
              width: "60%"
            }
          }
        }}
      >
        No le saque la espalda al dolor. Agende una cita por cualquiera de estos
        medios.
      </p>
    </div>
    <Container>
      <div
        css={{
          display: "block",
          textAlign: "left",
          [mobile]: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row"
          }
        }}
      >
        <div css={{ flex: "1" }}>
          <ul
            css={{
              listStyle: "none",
              ["& svg"]: { fontSize: "1.3rem", marginRight: "1rem" },
              marginLeft: "0",
              lineHeight: "1.8rem"
            }}
          >
            <li>
              <i className="fas fa-map-marker-alt " />
              {" Calle 106 #54-81, Bogotá, Bogotá. (El Sendero del Ser) "}
            </li>
            <li>
              <i className="fas fa-mobile-alt" style={{ fontSize: "1.8rem" }} />{" "}
              {" +57 310 212 4705"}
            </li>
            <li>
              <i className="fas fa-envelope" />{" "}
              <a
                href="mailto: william.gutierrez46@yahoo.es"
                css={{ color: white }}
              >
                {" william.gutierrez46@yahoo.es"}
              </a>
            </li>
          </ul>
        </div>
        <div css={{ flex: 1 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.432817324293!2d-74.06427685918338!3d4.694614237283606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ac53c935077%3A0xbd29d7c2ca7d6f37!2sCl.+106+%2354-81%2C+Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1516597969068"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen
          />
        </div>
      </div>
    </Container>
  </section>
)

export default ContactSection
