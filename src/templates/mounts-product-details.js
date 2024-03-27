import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Table from "react-bootstrap/Table";
import "../styles/global.css";

const MountsProductDetails = ({ data }) => {
  const variants = data.markdownRemark.frontmatter.variants;
  const title = data.markdownRemark.frontmatter.title;
  const images = data.markdownRemark.frontmatter.images;

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
        <div
          style={{
            marginTop: "3rem",
            marginBottom: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {images.map((image, index) => (
            <GatsbyImage
              key={index}
              image={getImage(image)}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
          }
        }
        images {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
          }
        }
      }
    }
  }
`;
