module.exports = {
  siteMetadata: {
    title: "William Gutierrez - Medicina del Dolor"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-81852234-3",
        // Setting this parameter is optional
        anonymize: true
      }
    }
  ]
}
