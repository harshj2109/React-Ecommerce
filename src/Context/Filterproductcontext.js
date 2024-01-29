import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useProductContext } from "./Productcontext";
import Filterproductreducer from "../Reducer/Filterproductreducer";
const Filterproduct =   createContext()

const initialState = {
    filterproduct : [],
    allproduct : [],
}

const Filterproductprovider = ({children})=>{

    const {products} = useProductContext()
    // console.log(products)

    const [state,dispatch] = useReducer(Filterproductreducer,initialState)

    useEffect(()=>{
        dispatch({type:"Dispatch_all_item" , payload:products})
    },[products])

    return(
        <Filterproduct.Provider value={{...state}}>
            {children}
        </Filterproduct.Provider>
    )

    
}

const Usefiltercontext = ()=>{
    return useContext(Filterproduct)
}

export {Filterproductprovider,Usefiltercontext}