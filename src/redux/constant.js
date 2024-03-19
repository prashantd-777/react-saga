
export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const RESET = "RESET";

export const createRequestType = (base) => {
    return [RESET, REQUEST, SUCCESS, FAILURE].reduce((acc, curr) => {
        acc[curr] = `${base}_${curr}`
        return acc;
    }, {})
}

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';
export const PRODUCT_LIST = createRequestType('PRODUCT_LIST');
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';