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
    ["& a"]: {
      color: primary
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
  }
}
const Footer = () => (
  <footer css={styles.footer}>
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
