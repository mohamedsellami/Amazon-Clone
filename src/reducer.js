export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
    basket: [],
    user: null
}

function reducer(state, action){
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //add to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //remove from basket
            let newBasket = [...state.basket];
            let index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);

            if(index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(
                    `this ( id: ${action.id}) not found`
                )
            }
            return {...state, basket: newBasket};
        default:
            return state;
    }
}

export default reducer;