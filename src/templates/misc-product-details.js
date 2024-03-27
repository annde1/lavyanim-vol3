import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ListGroup from "react-bootstrap/ListGroup";

const MiscProductDetails = ({ data }) => {
  const miscProductDetails = data.markdownRemark.frontmatter;
  const image = getImage(miscProductDetails.image);
  const html = data.markdownRemark.html;

  return (
    <>
      <LayoutComponent>
        <h1
          style={{
            textAlign: "center",
            marginTop: "4rem",
            marginBottom: "3rem",
          }}
        >
          {miscProductDetails.title}
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
          <GatsbyImage
            image={image}
            className="img-fluid"
            alt={miscProductDetails.title}
          />

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
              <div
                style={{
                  marginTop: "2rem",
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            )}
          </div>
        </div>
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
