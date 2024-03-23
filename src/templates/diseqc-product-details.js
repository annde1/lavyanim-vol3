import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"; // Import GatsbyImage and getImage
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

const DiseqcProductDetails = ({ data }) => {
  const productDetails = data.markdownRemark.frontmatter;
  // Get the image using getImage
  const image = getImage(productDetails.image);

  return (
    <LayoutComponent>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Use GatsbyImage component to display the image */}
          <GatsbyImage image={image} alt={productDetails.title} />

          <p
            style={{ fontWeight: "bold", fontSize: "2rem", marginTop: "1rem" }}
          >
            {productDetails.title}
          </p>
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
      </Container>
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
