import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Navigation from "../components/Navigation"
import Topbar from "../components/Topbar"
import Footer from "../components/Footer"
import "font-awesome/css/font-awesome.css"
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Medicina del dolor - William Gutierrez"
      meta={[
        {
          name: "description",
          content:
            "Práctica de más de 20 años de experiencia brindando atención personalizada en tratamientos de dolor usando diversos procedimientos seguros y técnicas no invasivas."
        },
        {
          name: "keywords",
          content:
            "dolor, quiropraxis, digito-puntura, quiromasaje, sintergetica, auriculoterapia, reflexologia, podal, reiki"
        }
      ]}
    />
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
