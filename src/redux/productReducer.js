import {FAILURE, PRODUCT_LIST, REQUEST, SUCCESS} from "./constant";

const initialState = {
    products: [],
    isLoading: false,
};

export const productCartData = (state = initialState, action) => {
    switch(action.type) {
       
        case PRODUCT_LIST[REQUEST]: {
            return {
                ...initialState,
                isLoading: true
            }
        }
        case PRODUCT_LIST[SUCCESS]: {
            return {
                ...state,
                isLoading: false,
                products: [...action.data]
            }
        }
        case PRODUCT_LIST[FAILURE]: {
            return {
                ...state,
                isLoading: false,
                products: []
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}