import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const ProductCardComponent = ({ product }) => {
  const image = getImage(product.image);

  return (
    <Card>
      <GatsbyImage image={image} alt={product.title} />

      <Card.Body className="d-flex flex-column">
        <Card.Title dir="rtl">{product.title}</Card.Title>
        <Card.Text dir="rtl">מחיר: ₪{product.price}</Card.Text>
        <Link to={"/products/diseqc/" + product.slug}>
          <Button
            variant="primary"
            className="align-self-end"
            style={{ backgroundColor: "#2f3030", fontSize: "1rem" }}
          >
            פרטים נוספים
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCardComponent;
