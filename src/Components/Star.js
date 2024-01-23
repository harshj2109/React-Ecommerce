import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import '../Css/Star.css'

const Star = ({star,review}) => {

    const ratingstar = Array.from({length:5},(elem,index)=>{

        const halfstar = index+0.5
        return <span key={index}>
            { (star >= index+1) ? <FaStar  className="staricon"/> : (star >= halfstar) ? <FaStarHalfAlt className="staricon" /> : <FaRegStar  className="staricon"/> }
        </span>
    })
  return (
    <div>
        {ratingstar}
        <span className="review-no">({review} Customer reviews)</span>
    </div>
  )
}

export default Star