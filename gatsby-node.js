const { graphql } = require("gatsby");

exports.createPages = async ({ graphql, actions }) => {
  // Query for both sets of products
  const { data: diseqcData } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/products/diseqc/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const { data: miscData } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/products/misc/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const { data: mountData } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/products/mounts/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const { data: lnbData } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/products/lnb/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const { data: dvbData } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/products/dvb/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const { data: recommendedProductsData } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/products/recommended/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  const diseqcProducts = diseqcData.allMarkdownRemark.nodes;
  const miscProducts = miscData.allMarkdownRemark.nodes;
  const mountProducts = mountData.allMarkdownRemark.nodes;
  const lnbProducts = lnbData.allMarkdownRemark.nodes;
  const dvbProducts = dvbData.allMarkdownRemark.nodes;
  const recommendedProducts = recommendedProductsData.allMarkdownRemark.nodes;

  diseqcProducts.forEach((product) => {
    actions.createPage({
      path: `/products/diseqc/${product.frontmatter.slug}`,
      component: require.resolve("./src/templates/diseqc-product-details.js"),
      context: {
        slug: product.frontmatter.slug,
      },
    });
  });

  // Create pages for Misc products
  miscProducts.forEach((product) => {
    actions.createPage({
      path: `/products/misc/${product.frontmatter.slug}`,
      component: require.resolve("./src/templates/misc-product-details.js"),
      context: {
        slug: product.frontmatter.slug,
      },
    });
  });

  //Create pages for Mounts products

  mountProducts.forEach((product) => {
    actions.createPage({
      path: `/products/mounts/${product.frontmatter.slug}`,
      component: require.resolve("./src/templates/mounts-product-details.js"),
      context: {
        slug: product.frontmatter.slug,
      },
    });
  });

  lnbProducts.forEach((product) => {
    actions.createPage({
      path: `/products/lnb/${product.frontmatter.slug}`,
      component: require.resolve("./src/templates/lnb-product-details.js"),
      context: {
        slug: product.frontmatter.slug,
      },
    });
  });

  dvbProducts.forEach((product) => {
    actions.createPage({
      path: `/products/dvb/${product.frontmatter.slug}`,
      component: require.resolve("./src/templates/dvb-product-details.js"),
      context: {
        slug: product.frontmatter.slug,
      },
    });
  });

  recommendedProducts.forEach((product) => {
    actions.createPage({
      path: `/products/recommended/${product.frontmatter.slug}`,
      component: require.resolve(
        "./src/templates/recommended-product-details.js"
      ),
      context: {
        slug: product.frontmatter.slug,
      },
    });
  });
};
