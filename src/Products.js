import React from 'react'
import {Usefiltercontext} from './Context/Filterproductcontext'
import Sortingbar from './Components/Sortingbar'
import Filterarea from './Components/Filterarea'
import AllFInalproducts from './Components/AllFInalproducts'
import './Css/AllProducts.css'
const Products = () => {
  const {filterproduct,allproduct} = Usefiltercontext()
  // console.log(filterproduct)
  return (


    <div className="all-product-context">

      <div className="all-avail-pro">

        <div className="sorting-area">
        <Sortingbar/>
        </div>

        <div className="mycartproducts">
          <AllFInalproducts/>
        </div>

      </div>


      <div className="filter-products">
        <Filterarea/>
      </div>
    </div>
  )
}

export default Products