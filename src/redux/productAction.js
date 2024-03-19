import {FAILURE, PRODUCT_LIST, REQUEST, SUCCESS} from "./constant";

export const action = (type, payload = {}) => {
    return {type, ...payload}
}
export const fetchProducts = {
    request: (data) => action(PRODUCT_LIST[REQUEST], {data}),
    success: (data, response) => action(PRODUCT_LIST[SUCCESS], {data, response}),
    failure: (data, error) => action(PRODUCT_LIST[FAILURE], {data, error})
}