import React, { useState } from 'react'
import '../Css/Details.css'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Details = ({products}) => {

    const {colors,id,stock} = products;
    const [color,setcolor] = useState("")
    const [count,setcount] = useState(1)

  return (
    <div className="details box">
        <p className="color-tag">Colours :
        {
        colors.map((curcolor,index)=>{
            return(
                <button onClick={()=>{
                    setcolor(curcolor)
                }} key={index} className={color == curcolor ? "colors coloractive" : "colors"} style={{backgroundColor : curcolor}}></button>
            )
        })
        }</p>
        <div className="no-of-item" >
            <CiSquareMinus className='item-btn' onClick={()=>{
             count > 1 ? setcount(count-1):setcount(1)
            }}  />
            <div>{count}</div>
            <CiSquarePlus className='item-btn' onClick={()=>{
                count < stock ? setcount(count+1) : setcount(stock)
             

            }} />

        </div>

        <div className="final-cart-btn">
            
                <NavLink to='/Cart'><button>
                Add to cart
                </button></NavLink>
        </div>
        
    </div>
  )
}

export default Details