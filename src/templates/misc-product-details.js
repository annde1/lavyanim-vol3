import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import Container from "react-bootstrap/Container";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ListGroup from "react-bootstrap/ListGroup";

const MiscProductDetails = ({ data }) => {
  console.log(data);

  const miscProductDetails = data.markdownRemark.frontmatter;
  const image = getImage(miscProductDetails.image);
  console.log(image);
  const html = data.markdownRemark.html;

  return (
    <>
      <LayoutComponent>
        <Container className="d-flex justify-content-center flex-column align-items-center mt-4">
          <GatsbyImage
            image={image}
            alt={miscProductDetails.title}
            style={{ width: "40%" }}
          />
          <p style={{ fontSize: "2rem", marginTop: "1rem" }}>
            {miscProductDetails.title}
          </p>
        </Container>

        <Container
          className="d-flex justify-content-center"
          style={{ height: "100vh" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ListGroup style={{ width: "100%", marginTop: "1rem" }}>
              <ListGroup.Item>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Product name: </p>
                  <p>{miscProductDetails.title}</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Price: </p>
                  <p>{miscProductDetails.price}</p>
                </div>
              </ListGroup.Item>
            </ListGroup>
            {html && (
              <div style={{ marginTop: "2rem" }}>
                <div dangerouslySetInnerHTML={{ __html: html }} dir="rtl" />
              </div>
            )}
          </div>
        </Container>
      </LayoutComponent>
    </>
  );
};

export default MiscProductDetails;

export const miscQuery = graphql`
  query MiscQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        price
        image {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: NONE, layout: CONSTRAINED)
          }
        }
      }
      html
    }
  }
`;
