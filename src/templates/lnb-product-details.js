import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ListGroup from "react-bootstrap/ListGroup";

const LnbProductDetails = ({ data }) => {
  const lnbProductDetails = data.markdownRemark.frontmatter;
  const image = getImage(lnbProductDetails.image);
  const html = data.markdownRemark.html;

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
          {lnbProductDetails.title}
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
          <GatsbyImage image={image} alt={lnbProductDetails.title} />

          <ListGroup style={{ width: "100%", marginTop: "1rem" }}>
            <ListGroup.Item>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Price: </p>
                <p>{lnbProductDetails.price}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Type: </p>
                <p>{lnbProductDetails.title}</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
          {html && (
            <div
              style={{
                marginTop: "2rem",
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: html }} dir="rtl" />
            </div>
          )}
        </div>
      </LayoutComponent>
    </>
  );
};
export default LnbProductDetails;

export const lnbQuery = graphql`
  query LnbQuery($slug: String) {
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
