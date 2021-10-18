const catsReducer = (
    state = {
        cats: [],
        loading: false, 
    }, action) =>{
        switch(action.type){

            default:
                return state;

            case "LOADING_CATS":
                return{
                    ...state, 
                    cats: [...state.cats],
                    loading: true,
                };
            
            case "ADD_CATS":
                return{
                    ...state, 
                    cats: action.cats,
                    loading: false,
                };
        }
    };

    export default catsReducer;