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
        fonts: ["Montserrat", "sans-serif", "Rubik Scribble"],
        display: "swap",
        weights: ["400", "500", "600", "700"],
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
        // The unique name for each instance
        name: `recommended`,
        // Path to the directory
        path: `${__dirname}/src/products/recommended/`,
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
        name: `images-lnb`,
        path: `${__dirname}/src/images/lnb/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-misc`,
        path: `${__dirname}/src/images/misc/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-mounts`,
        path: `${__dirname}/src/images/mounts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-dvb`,
        path: `${__dirname}/src/images/dvb/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-about`,
        path: `${__dirname}/src/images/about/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-recommended`,
        path: `${__dirname}/src/images/recommended/`,
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
