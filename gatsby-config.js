/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Montserrat", "sans-serif"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `diseqc`,
        // Path to the directory
        path: `${__dirname}/src/products/diseqc/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `dvb`,
        // Path to the directory
        path: `${__dirname}/src/products/dvb/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `lnb`,
        // Path to the directory
        path: `${__dirname}/src/products/lnb/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `misc`,
        // Path to the directory
        path: `${__dirname}/src/products/misc/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `mounts`,
        // Path to the directory
        path: `${__dirname}/src/products/mounts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-diseqc`,
        path: `${__dirname}/src/images/diseqc/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-diseqc`,
        path: `${__dirname}/src/templates/`,
      },
    },
  ],
};
