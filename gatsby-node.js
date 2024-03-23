// Update exports.createPages function
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
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

  // Access products from data.allMarkdownRemark.nodes
  const products = data.allMarkdownRemark.nodes;

  // Create pages for each product
  products.forEach((product) => {
    actions.createPage({
      path: `/products/diseqc/${product.frontmatter.slug}`,
      component: require.resolve("./src/templates/diseqc-product-details.js"),
      context: {
        slug: product.frontmatter.slug, // Pass slug as context
      },
    });
  });
};
