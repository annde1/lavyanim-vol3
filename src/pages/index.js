import * as React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
export default function Home({ data }) {
  const recommendedProducts = data.allMarkdownRemark.nodes;
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  }, [controls]);
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
        <Divider sx={{ bgcolor: "gray" }} />
        <h2
          dir="rtl"
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          תחומי עיסוק
        </h2>
        <div style={{ fontSize: "1.2rem" }}>
          <p dir="rtl">
            אנו בבן אלעזר תקשורת לווינית מתמחים בהתקנת צלחות לוויין.
          </p>
          <p dir="rtl">בעלי ותק בתחום התקשורת הלווינית של 20 שנה</p>
          <p dir="rtl">
            בעלי ותק בתחום תיקון מכשור אלקטרוני עדין ומכשור רפואי מעל ל-30 שנה.
          </p>
        </div>
        <Divider sx={{ bgcolor: "gray", mt: 4 }} />
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
              <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Card style={{ height: "35rem" }}>
                  <Card.Img
                    variant="top"
                    as={GatsbyImage}
                    image={getImage(product.frontmatter.image)}
                    alt={product.frontmatter.title}
                  />
                  <Card.Body>
                    <Card.Title>{product.frontmatter.title}</Card.Title>
                    <Card.Text>
                      <span style={{ marginRight: "1rem" }}>Price:</span>
                      {product.frontmatter.price}
                    </Card.Text>

                    <Link
                      to={"/products/recommended/" + product.frontmatter.slug}
                    >
                      <Button
                        style={{ backgroundColor: "#2f3030", fontSize: "1rem" }}
                      >
                        פרטים ניספים
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </motion.div>
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
          slug
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
