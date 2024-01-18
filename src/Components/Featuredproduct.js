import React from "react";
import { useProductContext } from "../Context/Productcontext";
import "../Css/Featuredproducts.css";
import { Link } from "react-router-dom";
import "../Css/product.css";
import Product from "./Product";

export default function Featuredproduct() {
  const { isLoading, featuresProducts } = useProductContext();
  console.log(featuresProducts[0])




  if (isLoading) {
    return (
      <div className="featurecontainer">
        <div className="feature-item loading">Items are Loading...</div>
      </div>
    );
  }
  // console.log(featuresProducts)
  return (
    <>
      <div className="featurecontainer">
        <div className="feature-item">
          <div className="tag1">Check Now!</div>
          <div className="feature-head">Our Feature Service</div>

          <div className="final-feature-container">
                
          {
            featuresProducts.length > 0 ? (
              featuresProducts[0].map((item) => {
              
              return (
                
                <Product key={item.id} {...item}/>  
              );
            })
          ) : (
            <div className="error">data not available</div>
          )}
          </div>
          
        </div>
        
      </div>
    </>
  );
}
