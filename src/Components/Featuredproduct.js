import React from "react";
import { useProductContext } from "../Context/Productcontext";
import "../Css/Featuredproducts.css";
import Product from "./Product";

export default function Featuredproduct() {
  const { isLoading, featuresProducts } = useProductContext();

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

          {featuresProducts.length > 0 ? (
            featuresProducts.map((item) => <Product key={item.id} {...item} />)
          ) : (
            <div className="error">data not available</div>
          )}
        </div>
      </div>
    </>
  );
}
