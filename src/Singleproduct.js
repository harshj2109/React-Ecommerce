import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContext } from './Context/Productcontext';
import { useEffect } from 'react';
import './Css/Singleproduct.css'
import Singleproductimg from './Components/Singleproductimg';
import { HiTruck } from "react-icons/hi2";
import { ImLoop } from "react-icons/im";
import { FaShieldAlt } from "react-icons/fa";
import Star from './Components/Star';
const Singleproduct = () => {

  const {id} = useParams();
  const {singleproduct,isSingleloading,getsingleproduct} = useProductContext()
  const api = "https://api.pujakaitem.com/api/products"

  const {
    id:alias,
    category,
    company,
    description,
    name,
    price,
    reviews,
    shipping,
    stars,
    stock,
    image
  } = singleproduct
   

  const correctedprice = Intl.NumberFormat('en-IN',{
    style:"currency",
    currency:"INR",
    maximumFractionDigits:2
  }).format(price/10);

  useEffect(()=>{
    getsingleproduct(`${api}?id=${id}`)
    
  },[])

  

  return (
    <>
    <div className="backlink">
      <NavLink className="back-home" to="/">Home</NavLink><span>/{name}</span>
    </div>
    {isSingleloading ? <div className='loading-container'>
    <div>Item is loading</div></div>:



    <div className='single-item-container'>

      <div className="single-item-img">
      <Singleproductimg img={image}/>
      </div>

      <div className="single-item-details">
        <div className="single-item-name">
          {name}
        </div>
        <div className="single-item-reviews">
          <Star star = {stars} review={reviews}/>
        </div>
        <div className="single-product-fake-price">
          <span className="price-tag">MRP:</span> <del>{correctedprice}</del>
        </div>
        <div className="single-product-price">
          <span className="original-price-tag">Deal of the day : </span><span className="original-price">{correctedprice}</span>
        </div>
        <div className="single-product-desc">
          {description}
        </div>

        <div className="company-features">
          
          <div className="company-feature-box">
          <HiTruck className='feature-icon'/>
            <div className="company-feature-img">Free delivery</div>
          </div>

          <div className="company-feature-box">
          <ImLoop  className='feature-icon'/>
            
            <div className="company-feature-img">Return & Replacement</div>
          </div>

          <div className="company-feature-box">
          <FaShieldAlt className='feature-icon'/>
            <div className="company-feature-img">Secure delivery</div>
          </div>

        </div>
        
        <div className="box-instock">
            Available: {
              stock > 0 ? "in stock" : "out of stock"
            }
          </div>

          <div className="single-product-brand">
            Company: {company}
          </div>
        
      </div>
    </div>
    }
    </>
  )
}

export default Singleproduct