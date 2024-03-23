import React from "react";
import LayoutComponent from "../../../components/LayoutComponent";
import { useStaticQuery, graphql } from "gatsby";
const Lnb = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/products/lnb/" } }
      ) {
        nodes {
          frontmatter {
            title
            price
            type
            frequency
            diseqc
            slug
            power
            loss
          }
        }
      }
    }
  `);
  const lnbProducts = data.allMarkdownRemark.nodes;
  return (
    <LayoutComponent>
      <h1>Lnb</h1>;
      {lnbProducts.map((product) => (
        <div className="col">
          <p>{product.frontmatter.title}</p>
        </div>
      ))}
    </LayoutComponent>
  );
};
export default Lnb;
