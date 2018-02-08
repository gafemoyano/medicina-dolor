import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Navigation from "../components/Navigation"
import Topbar from "../components/Topbar"
import Footer from "../components/Footer"
import favicon from "./favicon.png"
import cover from "../sections/sportsmassage1.jpg"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Clínica del dolor y Quiropráxis - William Gutierrez"
      meta={[
        {
          name: "description",
          content:
            "Clínica del Dolor y Quiropráxis de William Gutierrez. Práctica de más de 20 años de experiencia brindando atención personalizada en tratamientos de dolor usando diversos procedimientos seguros y técnicas no invasivas."
        },
        {
          name: "keywords",
          content:
            "clínica, dolor, quiropraxis, digito-puntura, quiromasaje, sintergetica, auriculoterapia, reflexologia, podal, reiki"
        },
        {
          name: "author",
          content: "Felipe Moyano"
        }
      ]}
    >
      <link rel="image_src" href={cover} />
      <link rel="icon" href={favicon} type="image/png" />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"
      />
    </Helmet>
    <header>
      <Topbar />
      <Navigation />
    </header>
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
