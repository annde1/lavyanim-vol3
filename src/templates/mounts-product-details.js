import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import Container from "react-bootstrap/Container";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Table from "react-bootstrap/Table";

const MountsProductDetails = ({ data }) => {
  //TODO: query an array of images doesn't work
  console.log(data);
  const variants = data.markdownRemark.frontmatter.variants;
  const title = data.markdownRemark.frontmatter.title;
  console.log(variants);
  return (
    <>
      <LayoutComponent>
        <h1
          style={{
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          {title}
        </h1>
        <Table bordered hover dir="rtl" style={{ fontSize: "1.1rem" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>אופציה</th>
              <th>מחיר</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((variant, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{variant.optionCombination}</td>
                <td>{variant.actualPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </LayoutComponent>
    </>
  );
};
export default MountsProductDetails;

export const mountsQuery = graphql`
  query MountsQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        variants {
          actualPrice
          optionCombination
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
          }
        }
      }
    }
  }
`;
