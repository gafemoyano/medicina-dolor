import React from "react"
import Container from "../components/Container"
import SectionSeparator from "../components/SectionSeparator"
import { mobile, desktop } from "../utils/media"
import { primary, white, grey_dark } from "../utils/colors"
import { rhythm } from "../utils/typography"

const TreatmentSection = () => (
  <section
    css={{
      padding: "100px 0",
      textAlign: "center",
      background: grey_dark,
      color: "#baeced"
    }}
  >
    <Container>
      <h2
        css={{
          fontWeighit: "400",
          letterSpacing: "0.05em"
        }}
      >
        Tratamiento del Dolor
      </h2>
      <SectionSeparator css={{ background: white }} />
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <p
          css={{
            fontSize: rhythm(0.8),
            width: "100%",
            [desktop]: {
              width: "60%"
            }
          }}
        >
          William Guitierrez usa una variedad de técnicas para manipular los
          músculos y el esqueleto con el fin de aliviar presión en el sistema
          nervioso, eliminando las causas fundamentales del dolor, el estrés y
          dístintos síntomas incluyendo:
        </p>
      </div>
    </Container>
    <Container>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          fontSize: rhythm(0.8),

          "& ul": {
            marginLeft: "2em",
            marginTop: "0em",
            listStyle: "none",
            textAlign: "left",
            paddingBottom: "0px",
            marginBottom: "0px"
          },
          "& i": {
            marginRight: "10px"
          },
          [mobile]: {
            flexDirection: "row",
            marginTop: "1em",
            "& ul": {
              marginTop: "1em",
              marginBottom: "1.5rem"
            }
          }
        }}
      >
        <div css={{ flex: 1 }}>
          <ul>
            <li>
              <i className="fa fa-plus" /> Migrañas
            </li>
            <li>
              <i className="fa fa-plus" /> Esguinces
            </li>
            <li>
              <i className="fa fa-plus" /> Torceduras
            </li>
            <li>
              <i className="fa fa-plus" /> Dolor Lumbar
            </li>
            <li>
              <i className="fa fa-plus" /> Tunel Carpiano
            </li>
            <li>
              <i className="fa fa-plus" /> Dolores de Pie
            </li>
            <li>
              <i className="fa fa-plus" /> Cansancio
            </li>
          </ul>
        </div>
        <div css={{ flex: 1 }}>
          <ul>
            <li>
              <i className="fa fa-plus" /> Hernia Discal
            </li>
            <li>
              <i className="fa fa-plus" /> Parálisis Facial
            </li>
            <li>
              <i className="fa fa-plus" /> Cíatica
            </li>
            <li>
              <i className="fa fa-plus" />Tortícolis
            </li>
            <li>
              <i className="fa fa-plus" />Dolor de Mano
            </li>
            <li>
              <i className="fa fa-plus" />Dolor Calcáneo
            </li>
            <li>
              <i className="fa fa-plus" />Dolor de Espalda
            </li>
          </ul>
        </div>
        <div css={{ flex: 1 }}>
          <ul>
            <li>
              <i className="fa fa-plus" /> Codo de Tenista
            </li>
            <li>
              <i className="fa fa-plus" /> Dolores de Hombre
            </li>
            <li>
              <i className="fa fa-plus" /> Desintoxicación Hepática
            </li>
            <li>
              <i className="fa fa-plus" /> Dolor Pre Menstrual
            </li>
            <li>
              <i className="fa fa-plus" /> Dolores de Pierna
            </li>
            <li>
              <i className="fa fa-plus" /> Dolores Radicular
            </li>
            <li>
              <i className="fa fa-plus" /> Espasmos Musculares
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </section>
)

export default TreatmentSection
