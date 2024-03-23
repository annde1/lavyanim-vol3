import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
const DiseqcProductDetails = () => {
  const data = useStaticQuery(graphql`
    query MyQuery($slug: String) {
      markdownRemark(frontmatter: { slug: { eq: $slug } }) {
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 300
                placeholder: NONE
              )
            }
          }
          diseqc
          frequency
          loss
          power
          price
          slug
          type
          title
        }
      }
    }
  `);

  const productDetails = data.markdownRemark.frontmatter;
  const productImage = getImage(productDetails.image);

  return (
    <>
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
            <GatsbyImage image={productImage} alt={productDetails.title} />

            <p
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                marginTop: "1rem",
              }}
            >
              {productDetails.title}
            </p>
            <ListGroup style={{ width: "100%", marginTop: "1rem" }}>
              <ListGroup.Item>
                <div style={{ display: "flex" }}>
                  <p>Diseqc: </p>
                  <p>{productDetails.diseqc}</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div style={{ display: "flex" }}>
                  <p>Frequency: </p>
                  <p>{productDetails.frequency}</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div style={{ display: "flex" }}>
                  <p>Loss: </p>
                  <p>{productDetails.loss}</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div style={{ display: "flex" }}>
                  <p>Power: </p>
                  <p>{productDetails.power}</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div style={{ display: "flex" }}>
                  <p>Type: </p>
                  <p>{productDetails.type}</p>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Container>
      </LayoutComponent>
    </>
  );
};
export default DiseqcProductDetails;

/*
query MyQuery($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 300, placeholder: NONE)
        }
      }
      diseqc
      frequency
      loss
      power
      price
      slug
      type
      title
    }
  }
}
*/
