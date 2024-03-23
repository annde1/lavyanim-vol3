import React from "react";
import LayoutComponent from "../../../components/LayoutComponent";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
                  layout: CONSTRAINED
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
  console.log(lnbProducts);
  return (
    <LayoutComponent>
      <h1>Lnb</h1>
      <div className="row">
        {lnbProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.frontmatter.title}>
            <Card>
              {/* Display image */}
              <Card.Img
                variant="top"
                as={GatsbyImage}
                image={getImage(product.frontmatter.image)}
                alt={product.frontmatter.title}
              />
              <Card.Body>
                {/* Display title */}
                <Card.Title>{product.frontmatter.title}</Card.Title>
                {/* Display price */}
                <Card.Text>Price:{product.frontmatter.price}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </LayoutComponent>
  );
};

export default Lnb;
