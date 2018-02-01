import React from "react"
import Container from "../../components/Container"
import SectionSeparator from "../../components/SectionSeparator"
import { mobile, desktop } from "../../utils/media"
import quiropraxis from "./quiropraxis.jpg"
import digitopuntura from "./digitopuntura.jpg"
import quiromasaje from "./quiromasaje.jpg"
import shiatsu from "./shiatsu.jpg"
import masajeChino from "./masaje-chino.jpg"
import reflexologiaPodal from "./reflexologia-podal.jpg"
import auriculoterapia from "./auriculoterapia.jpg"
import reiki from "./reiki.jpg"
import masajeSacroCraneal from "./masaje-sacrocraneal.jpg"
import { rhythm } from "../../utils/typography"

import { primary, white, grey_dark } from "../../utils/colors"

const styles = {
  section: { padding: "100px 0", textAlign: "center" },
  title: {
    fontWeighit: "400",
    letterSpacing: "0.05em"
  },
  subtitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "& p": {
      width: "100%",
      fontSize: rhythm(0.8),
      [desktop]: {
        width: "60%"
      }
    }
  },
  grid: {
    display: "block",
    [mobile]: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  },
  cell: {
    padding: "0 1rem",
    "& img": {
      display: "block",
      marginBottom: "0"
    },
    [mobile]: {
      width: "50%"
    },
    [desktop]: {
      width: "calc(100%/3)"
    },
    "& h4": {
      background: grey_dark,
      color: primary,
      width: "100%",
      padding: "0.5rem 1rem",
      fontSize: rhythm(1)
    }
  },
  responsiveImage: {
    width: "100%"
  }
}
const TreatmentSection = () => (
  <section css={styles.section}>
    <Container>
      <h2 css={styles.title}>Tratamiento del Dolor</h2>
      <SectionSeparator css={{ background: primary }} />
      <div css={styles.subtitleContainer}>
        <p>
          William Guitierrez cuenta con 20 años de experiencia en tratamiento
          del dolor utilizando diversas técnicas.
        </p>
      </div>
    </Container>
    <Container>
      <div css={styles.grid}>
        <div css={styles.cell}>
          <img src={quiropraxis} alt="" /> <h4>Quiropráxis</h4>
        </div>
        <div css={styles.cell}>
          <img src={digitopuntura} alt="" /> <h4>Digitopuntura</h4>
        </div>
        <div css={styles.cell}>
          <img src={quiromasaje} alt="" /> <h4>Quiromasaje</h4>
        </div>
        <div css={styles.cell}>
          <img src={shiatsu} alt="" /> <h4>Shiat-Su</h4>
        </div>
        <div css={styles.cell}>
          <img src={masajeChino} alt="" /> <h4>Masaje Energético Chino</h4>
        </div>
        <div css={styles.cell}>
          <img src={auriculoterapia} alt="" /> <h4>Auriculoterapia</h4>
        </div>
        <div css={styles.cell}>
          <img src={reflexologiaPodal} alt="" /> <h4>Reflexología Podal</h4>
        </div>
        <div css={styles.cell}>
          <img src={reiki} alt="" /> <h4>Reiki</h4>
        </div>
        <div css={styles.cell}>
          <img src={masajeSacroCraneal} alt="" /> <h4>Masaje Sacro Craneal</h4>
        </div>
      </div>
    </Container>
  </section>
)

export default TreatmentSection
