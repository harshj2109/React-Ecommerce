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

    useEffect(()=>{
        getproducts(API)
    },[])


    return (
        <Appcontext.Provider value={{ ...state }}>{children}</Appcontext.Provider>
    )
    
}

// custom hook

const useProductContext = ()=>{
    return useContext(Appcontext);
}

export {Appprovider,Appcontext,useProductContext}