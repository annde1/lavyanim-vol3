import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ListGroup from "react-bootstrap/ListGroup";

const DiseqcProductDetails = ({ data }) => {
  const productDetails = data.markdownRemark.frontmatter;
  const image = getImage(productDetails.image);

  return (
    <LayoutComponent>
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        {productDetails.title}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "3rem",
        }}
      >
        <GatsbyImage image={image} alt={productDetails.title} />
        <ListGroup style={{ width: "100%", marginTop: "1rem" }}>
          <ListGroup.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Diseqc: </p>
              <p>{productDetails.diseqc}</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Frequency: </p>
              <p>{productDetails.frequency}</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Loss: </p>
              <p>{productDetails.loss}</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Power: </p>
              <p>{productDetails.power}</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>Type: </p>
              <p>{productDetails.type}</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </LayoutComponent>
  );
};

export default DiseqcProductDetails;

export const productQuery = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: NONE, width: 300)
          }
        }
      }
    }
  }
`;
