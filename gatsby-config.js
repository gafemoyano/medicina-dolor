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
    }
  ]
};