import React from "react";
import LayoutComponent from "../../../components/LayoutComponent";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";
const Mounts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/products/mounts/" } }
      ) {
        nodes {
          frontmatter {
            title
            price
            slug
            image {
              childImageSharp {
                gatsbyImageData(placeholder: NONE, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  const mountProducts = data.allMarkdownRemark.nodes;

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
          צלחות ורגליים
        </h1>
        <div className="row">
          {mountProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.frontmatter.slug}>
              <Card style={{ height: "22rem" }}>
                <Card.Img
                  variant="top"
                  as={GatsbyImage}
                  image={getImage(product.frontmatter.image)}
                  alt={product.frontmatter.title}
                />
                <Card.Body>
                  <Card.Title>{product.frontmatter.title}</Card.Title>
                  <Card.Text>Price: {product.frontmatter.price}</Card.Text>
                  <Link to={"/products/mounts/" + product.frontmatter.slug}>
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
    </>
  );
};
export default Mounts;
