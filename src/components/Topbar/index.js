import React from "react"
import { grey } from "../../utils/colors"
import Container from "../Container"
import { desktop } from "../../utils/media"
const Topbar = () => (
  <div
    css={{
      display: "none",
      position: "relative",
      backgroundColor: grey,
      paddingTop: "5px",
      paddingBottom: "5px",
      color: "#c1c1c1",
      fontSize: "1rem",
      backgroundColor: "#52565f",
      [desktop]: {
        display: "block"
      }
    }}
  >
    <Container>
      <div
        css={{
          display: "flex"
        }}
      >
        <div css={{ flex: 1, fontSize: "1rem" }}>
          No le saque la espalda al dolor.{" "}
        </div>
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
              <i className="fa fa-envelope-o" />
              {" : "}
              <a
                href="mailto: william.gutierrez46@yahoo.es"
                css={{ color: "white" }}
              >
                {"william.gutierrez46@yahoo.es"}
              </a>
            </li>
            <li>
              <i className="fa fa-phone" />
              <span css={{ color: "white" }}> : +57 3120 2124705</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </div>
)

export default Topbar
