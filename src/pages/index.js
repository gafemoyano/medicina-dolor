import React from "react"
import Link from "gatsby-link"
import HeroSection from "../sections/Hero"
import TreatmentSection from "../sections/Treatment"
import TechniquestSection from "../sections/Techniques"
import ContactSection from "../sections/Contact"
import Container from "../components/Container"
const IndexPage = () => (
  <div>
    <HeroSection />
    <TreatmentSection />
    <TechniquestSection />
    <ContactSection />
  </div>
)

export default IndexPage
