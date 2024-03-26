import React from "react";
import LayoutComponent from "../../../components/LayoutComponent";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";

const Lnb = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/products/lnb/" } }
      ) {
        nodes {
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
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: NONE
                  width: 300
                )
              }
            }
          }
        }
      }
    }
  `);
  const lnbProducts = data.allMarkdownRemark.nodes;

  return (
    <LayoutComponent>
      <h1
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
      >
        LNB Products
      </h1>
      <div className="row">
        {lnbProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.frontmatter.title}>
            <Card>
              <Card.Img
                variant="top"
                as={GatsbyImage}
                image={getImage(product.frontmatter.image)}
                alt={product.frontmatter.title}
              />
              <Card.Body>
                <Card.Title>{product.frontmatter.title}</Card.Title>
                <Card.Text>Price:{product.frontmatter.price}</Card.Text>
                <Link to={"/products/lnb/" + product.frontmatter.slug}>
                  <Button
                    style={{ backgroundColor: "#2f3030", fontSize: "1rem" }}
                  >
                    פרטים ניספים
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </LayoutComponent>
  );
};

export default Lnb;
