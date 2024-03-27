import React from "react";
import LayoutComponent from "../../../components/LayoutComponent";
import ProductCardComponent from "../../../components/ProductCardComponent";
import { useStaticQuery, graphql } from "gatsby";

const Diseqc = () => {
  // Fetch the products using useStaticQuery
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/products/diseqc/" } }
      ) {
        nodes {
          frontmatter {
            diseqc
            frequency
            loss
            power
            price
            slug
            title
            type
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: NONE
                  width: 300
                )
              }
            }
          }
        }
      }
    }
  `);

  // Access the products from the data
  const products = data.allMarkdownRemark.nodes;

  return (
    <>
      <LayoutComponent>
        <div>
          <h1
            style={{
              textAlign: "center",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
            dir="rtl"
          >
            מוצרי DiSEqc
          </h1>
          <div className="row" style={{ marginBottom: "4rem" }}>
            {products.map((product) => (
              <div className="col" key={product.frontmatter.slug}>
                <ProductCardComponent product={product.frontmatter} />
              </div>
            ))}
          </div>
        </div>
      </LayoutComponent>
    </>
  );
};

export default Diseqc;
