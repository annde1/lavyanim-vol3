import * as React from "react";
import NavBarComponent from "../components/NavBarComponent";
import LayoutComponent from "../components/LayoutComponent";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function Home({ data }) {
  const recommendedProducts = data.allMarkdownRemark.nodes;

  console.log(recommendedProducts);
  return (
    <>
      <LayoutComponent>
        <h1
          style={{
            textAlign: "center",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
          dir="rtl"
        >
          דף הבית
        </h1>
        <hr class="hr" />
        <h2
          dir="rtl"
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          תחומי עיסוק
        </h2>
        <p dir="rtl">
          אנו בבן אלעזר תקשורת לווינית מתמחים בהתקנת צלחות לוויין.
        </p>
        <p dir="rtl">בעלי ותק בתחום התקשורת הלווינית של 20 שנה</p>
        <p dir="rtl">
          בעלי ותק בתחום תיקון מכשור אלקטרוני עדין ומכשור רפואי מעל ל-30 שנה.
        </p>
        <hr class="hr" style={{ marginTop: "2rem" }} />
        <h2
          dir="rtl"
          style={{
            marginTop: "2rem",
            marginBottom: "3rem",
          }}
        >
          מוצרים מומלצים
        </h2>
        <div className="row">
          {recommendedProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.frontmatter.title}>
              <Card style={{ height: "35rem" }}>
                <Card.Img
                  variant="top"
                  as={GatsbyImage}
                  image={getImage(product.frontmatter.image)}
                  alt={product.frontmatter.title}
                />
                <Card.Body>
                  <Card.Title>{product.frontmatter.title}</Card.Title>
                  <Card.Text>Price:{product.frontmatter.price}</Card.Text>

                  <Button
                    style={{ backgroundColor: "#2f3030", fontSize: "1rem" }}
                  >
                    פרטים ניספים
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </LayoutComponent>
    </>
  );
}

export const recommendedQuery = graphql`
  query RecommendedQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/products/recommended/" } }
    ) {
      nodes {
        frontmatter {
          title
          price
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
        }
      }
    }
  }
`;
