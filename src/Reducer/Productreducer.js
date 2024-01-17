const Productreducer = (state,action)=>{

    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
            }
            break;
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
            break;

        case "MY_API_DATA":

        const featureData = action.payload.filter((curelem)=>{
            return curelem.featured === true;
        })

            return{
                ...state,
                isLoading:false,
                products : [action.payload],
                featuresProducts:[featureData],
            }
            break;

        
        default:
            return state;
    }


    return state
}

export default Productreducer