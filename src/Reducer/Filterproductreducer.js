const Filterproductreducer = (state,action)=>{
    switch(action.type){

        case "Dispatch_all_item":
            return {
                ...state,
                filterproduct : [...action.payload],
                allproduct : [...action.payload]
            }
            break
        default:
            return state
    }

    return state
}

export default Filterproductreducer