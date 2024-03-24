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

  console.log(miscData);
  // Extract products from both queries
  const diseqcProducts = diseqcData.allMarkdownRemark.nodes;
  const miscProducts = miscData.allMarkdownRemark.nodes;

  console.log("MISC PRODUCT", miscProducts);
  // Create pages for Diseqc products
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
};
