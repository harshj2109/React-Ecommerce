import React from "react";
import { Link } from "react-router-dom";
import "../Css/product.css";

const Product = (props) => {
  const { category, id, image, name, price } = props; // Corrected destructuring

  const inrprice = Intl.NumberFormat("en-IN",{
                style:"currency",
                currency:"INR",
                maximumFractionDigits:2,
              }).format(price/100)
  return (
    
      <Link to={`/singleproduct/${id}`} className="singleproduct">
        <div>
        <div className="imgbox">
            <div className="imgtype">{category}</div>
            <img src={image} alt={name} className="feature-pro-img" />

        </div>
        <div className="pro-details">
            <div className="pro-name">{name}</div>
            <div className="pro-price">{inrprice}</div>
        </div>
        </div>
      </Link>
    
  );
};

export default Product;
