import React from "react"
import Container from "../components/Container"
import SectionSeparator from "../components/SectionSeparator"
import { mobile, desktop } from "../utils/media"
import { primary, white } from "../utils/colors"

const TreatmentSection = () => (
  <section
    css={{
      padding: "100px 0",
      textAlign: "center",
      background: primary,
      color: white
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
            width: "100%",
            [desktop]: {
              width: "50%"
            }
          }}
        >
          William Guitierrez cuenta con 20 años de experiencia en tratamiento
          del dolor utilizando diversas técnicas.
        </p>
      </div>
    </Container>
    <Container>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
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
              <i className="fa fa-plus" /> Quiropráxis
            </li>
            <li>
              <i className="fa fa-plus" /> Digito Puntura
            </li>
            <li>
              <i className="fa fa-plus" /> Quiromasaje
            </li>
          </ul>
        </div>
        <div css={{ flex: 1 }}>
          <ul>
            <li>
              <i className="fa fa-plus" /> Shiat-Su
            </li>
            <li>
              <i className="fa fa-plus" /> Masaje Energético Chino
            </li>
            <li>
              <i className="fa fa-plus" /> Auriculoterapia
            </li>
          </ul>
        </div>
        <div css={{ flex: 1 }}>
          <ul>
            <li>
              <i className="fa fa-plus" /> Reflexología Podal
            </li>
            <li>
              <i className="fa fa-plus" /> Reiki
            </li>
            <li>
              <i className="fa fa-plus" /> Masaje-Sacro-Craneal
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </section>
)

export default TreatmentSection
