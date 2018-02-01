import React from "react"
import Container from "./Container"
import { white, primary, grey_dark, grey_darker, dark } from "../utils/colors"
import { style } from "glamor"
import { mobile } from "../utils/media"

const styles = {
  footer: {
    color: primary,
    borderTop: "1px solid rgba(0,0,0,0.15)",
    backgroundColor: grey_dark,
    paddingTop: "40px",
    ["& a"]: {
      color: primary
    }
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
    ["& i"]: {
      marginRight: "10px"
    }
  },
  copyright: {
    backgroundColor: dark,
    padding: "25px 0",
    fontSize: "0.9rem",
    textAlign: "center",
    ["& a"]: {
      color: primary,
      fontWeight: "bold"
    }
  },
  contactList: {
    listStyle: "none",
    ["& li"]: { fontSize: "1.3rem" },
    marginLeft: "0",
    lineHeight: "1.8rem"
  }
}
const Footer = () => (
  <footer css={styles.footer}>
    <Container>
      <div css={styles.contact}>
        <div css={styles.column}>
          <h2>Contacto y Citas</h2>
          <ul css={styles.contactList}>
            <li>
              <i className="fas fa-map-marker-alt " />
              {"Calle 106 #54-81, Bogotá, Bogotá. (El Sendero del Ser) "}
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
                {"william.gutierrez46@yahoo.es"}
              </a>
            </li>
          </ul>
        </div>
        <div css={styles.column}>
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

    <div css={styles.copyright}>
      <Container>
        <span>© 2018 Todos los Derechos Reservados</span>
        <strong> William Gutierrez</strong>. Diseñada por{" "}
        <a href="http://gafemoyano.com">Felipe Moyano</a>
      </Container>
    </div>
  </footer>
)

export default Footer
