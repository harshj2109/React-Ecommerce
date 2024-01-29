import { createContext,useEffect, useReducer,useContext} from "react";
import axios from 'axios'
import reducer from '../Reducer/Productreducer'


const Appcontext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialstate =  {
    isLoading : false,
    isError : false,
    products : [],
    featuresProducts:[],
    isSingleLoading:false,
    singleproduct:{},
}


const Appprovider = ({children})=>{

    const [state , dispatch] = useReducer(reducer, initialstate)
    

    
    const getproducts = async (url) =>{
        dispatch({type:"SET_LOADING"})
        try {
            const item = await axios.get(url)
            const maindata = await item.data
            
            dispatch({type:"MY_API_DATA",payload:maindata})

        } catch (error) {
            dispatch({type:"API_ERROR"})
        }
    }

    const getsingleproduct = async (url)=>{

        dispatch({type:"SET_SINGLEPRODUCT_LOADING"})
       try{
        const singleproduct = await axios.get(url)
        const singleproductdata = await singleproduct.data
        
        dispatch({type:"SET_SINGLEPRODUCT_LOADED",payload:singleproductdata})
        
       }
       catch(err){
        dispatch({type:"SET_SINGLEPRODUCT_ERR"})

       }
    }

    useEffect(()=>{
        getproducts(API)
        
    },[])


    return (
        <Appcontext.Provider value={{ ...state , getsingleproduct}}>
            {children}
        </Appcontext.Provider>
    )
    
}

// custom hook

const useProductContext = ()=>{
    return useContext(Appcontext);
}

export {Appprovider,Appcontext,useProductContext}