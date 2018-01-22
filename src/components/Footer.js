import React from "react"
import Container from "./Container"
import { white, primary } from "../utils/colors"
import { style } from "glamor"

const styles = {
  footer: {
    color: white,
    borderTop: "1px solid rgba(0,0,0,0.15)",
    backgroundColor: primary,
    paddingTop: "40px"
  },
  column: {
    flex: 1
  },
  contact: {
    paddingTop: "50px",
    display: "flex",
    ["& i"]: {
      marginRight: "10px"
    }
  },
  copyright: {
    backgroundColor: "rgb(16, 101, 154)",
    padding: "25px 0",
    fontSize: "0.9rem",
    textAlign: "center",
    ["& a"]: {
      color: white,
      fontWeight: "bold"
    }
  },
  contactList: {
    listStyle: "none",
    ["& li"]: { fontSize: "1.3rem" },
    marginLeft: "0",
    lineHeight: "2rem"
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
              <i className="fa fa-map-marker fa-large" />
              {"Calle 106 #54-81, Bogotá, Bogotá. (El Sendero del Ser) "}
            </li>
            <li>
              <i
                className="fa fa-mobile fa-large"
                style={{ fontSize: "1.8rem" }}
              />{" "}
              {" +57 310 212 4705"}
            </li>
            <li>
              <i className="fa fa-envelope-o fa-large" />{" "}
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
            width="600"
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
