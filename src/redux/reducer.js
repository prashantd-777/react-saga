import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from "./constant";

const initialState = []

export const cartData = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: {
            return [
                ...state,
                action?.data
            ]
        }
        case REMOVE_FROM_CART: {
            const remainItems = state.filter(item => item?.id != action.data)
            return [
                ...remainItems
            ]
        }
        case EMPTY_CART: {
            state.length = 0;
            return [
                ...state
            ]
        }
        default: {
            return [...state]
        }
    }
}