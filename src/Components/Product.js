import React from "react";
import { Link } from "react-router-dom";
import "../Css/product.css";

const Product = (props) => {
  const { category, id, image, name, price } = props; // Corrected destructuring
  console.log(props);
  
  return (
    <div className="final-feature-container">
      <Link to={`/singleproduct/${id}`} className="singleproduct">
        <div className="feature-img-box">
          <div className="imgtype">{category}</div>
          <img src={image} alt={name} className="feature-img" />
        </div>
        <div className="feature-item-detail">
          <div className="item-name">{name}</div>
          <div className="item-price">{price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
