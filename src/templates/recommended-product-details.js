import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const RecommendedProductDetails = ({ data }) => {
  console.log(data);
  const recommendedProduct = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;
  const image = getImage(recommendedProduct.image);

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
          מוצר מומלץ
        </h1>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          {recommendedProduct.title}
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "3rem",
          }}
        >
          <GatsbyImage image={image} alt={recommendedProduct.title} />
          <h4 style={{ marginTop: "2rem" }} dir="rtl">
            <span style={{ marginLeft: "1rem" }}>מחיר:</span>
            {recommendedProduct.price}
          </h4>
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
export default RecommendedProductDetails;

export const recommendedQuery = graphql`
  query RecommendedQuery($slug: String) {
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
