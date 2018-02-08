import React from "react"
import { grey, dark } from "../utils/colors"
import FluidContainer from "./FluidContainer"
import { desktop } from "../utils/media"
const Topbar = () => (
  <div
    css={{
      display: "none",
      position: "relative",
      backgroundColor: dark,
      paddingTop: "5px",
      paddingBottom: "5px",
      color: "#c1c1c1",
      fontSize: "1rem",
      [desktop]: {
        display: "block"
      }
    }}
  >
    <FluidContainer>
      <div
        css={{
          display: "flex"
        }}
      >
        <div css={{ flex: 1, fontSize: "1rem" }}>William Gutierrez M.T.C. </div>
        <div css={{ flex: 1, textAlign: "right" }}>
          <ul
            css={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              "& li": {
                display: "inline",
                padding: "0 1rem"
              }
            }}
          >
            <li>
              <i className="fa fa-map-marker-alt" />
              <span css={{ color: "white" }}>
                {" "}
                Calle 106 # 54 - 81, Bogotá.
              </span>
            </li>
            <li>
              <i className="far fa-envelope" />
              {"  "}
              <a
                href="mailto: william.gutierrez46@yahoo.es"
                css={{ color: "white" }}
              >
                {"william.gutierrez46@yahoo.es"}
              </a>
            </li>
            <li>
              <i className="fab fa-whatsapp" />
              <span css={{ color: "white" }}> +57 310 575 9202</span>
            </li>
          </ul>
        </div>
      </div>
    </FluidContainer>
  </div>
)

export default Topbar
