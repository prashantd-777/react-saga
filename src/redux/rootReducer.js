import { combineReducers } from "redux";
import { cartData } from "./reducer";
import {productCartData} from "./productReducer";

export default combineReducers({
    cartData,
    productCartData
});