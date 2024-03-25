import React, { useState } from "react";
import LayoutComponent from "../../../components/LayoutComponent";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const totalPages = Math.ceil(dvbProducts.length / productsPerPage);

  // Logic to slice products array based on current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = dvbProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <LayoutComponent>
      <h1
        style={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}
      >
        DVB Products
      </h1>
      <div className="row">
        {currentProducts.map((product) => (
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
      <div className="d-flex justify-content-center mt-4 mb-4">
        <Pagination>
          <Pagination.Prev
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage > 1 ? prevPage - 1 : prevPage
              )
            }
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage < totalPages ? prevPage + 1 : prevPage
              )
            }
          />
        </Pagination>
      </div>
    </LayoutComponent>
  );
};

export default Dvb;
