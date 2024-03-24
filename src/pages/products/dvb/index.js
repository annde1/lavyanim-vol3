import React from "react";
import LayoutComponent from "../../../components/LayoutComponent";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";

const Dvb = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/products/dvb/" } }
      ) {
        nodes {
          frontmatter {
            title
            price
            previousPrice
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const dvbProducts = data.allMarkdownRemark.nodes;

  return (
    <LayoutComponent>
      <h1>Dvb</h1>
      <div className="row">
        {dvbProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.frontmatter.title}>
            <Card style={{ height: "20rem" }}>
              <GatsbyImage
                image={getImage(product.frontmatter.image)}
                alt={product.frontmatter.title}
              />
              <Card.Body>
                <Card.Title>{product.frontmatter.title}</Card.Title>
                <Card.Text>Price: {product.frontmatter.price}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </LayoutComponent>
  );
};

export default Dvb;
