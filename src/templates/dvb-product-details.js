import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ListGroup from "react-bootstrap/ListGroup";

const DvbProductDetails = ({ data }) => {
  const dvbProductDetails = data.markdownRemark.frontmatter;
  const image = getImage(dvbProductDetails.image);
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
          {dvbProductDetails.title}
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
          <GatsbyImage image={image} alt={dvbProductDetails.title} />

          <ListGroup style={{ width: "100%", marginTop: "1rem" }}>
            <ListGroup.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.3rem",
                }}
              >
                <p>Price: </p>
                <div>
                  <span>{dvbProductDetails.price}</span>
                  {dvbProductDetails.previousPrice && (
                    <span
                      style={{
                        marginLeft: "1rem",
                        textDecoration: "line-through",
                      }}
                    >
                      {dvbProductDetails.previousPrice}
                    </span>
                  )}
                </div>
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
      </LayoutComponent>
    </>
  );
};
export default DvbProductDetails;

export const dvbQuery = graphql`
  query DvbQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
          }
        }
        price
        previousPrice
      }
      html
    }
  }
`;
