import React, { useState } from 'react'
import '../Css/Singleproductimg.css'

const Singleproductimg = ({img = [{url:""}]}) => {


const [mainimg,setmainimg] = useState(img[0])

  return (
    <div className="single-product-img-container">
      <div className="four-img">
        {
          img.map((elem)=>{
            return(
              <div className="single-product-img-item">
                <img src={elem.url} alt={elem.filename} key={elem.id}  onClick={()=> setmainimg(elem)
                } />
              </div>
            )
          })
        }
      </div>

      <div className="single-img">
        <img src={mainimg.url} alt="" className="main-single-img" />
      </div>
    </div>
  )
}

export default Singleproductimg