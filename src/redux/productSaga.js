import {takeEvery, put} from "redux-saga/effects";
import { PRODUCT_LIST, REQUEST, SUCCESS } from "./constant";

function* getProducts() {
    console.log("Call get products api");
    let res = yield fetch("http://localhost:4000/product");
    let data = yield res.json();
    console.log("data", data);
    yield put({
        type: PRODUCT_LIST[SUCCESS], data
    });
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST[REQUEST], getProducts)
}

export default productSaga;