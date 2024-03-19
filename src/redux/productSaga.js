import {takeEvery, put} from "redux-saga/effects";
import { PRODUCT_LIST, REQUEST, SUCCESS } from "./constant";

function* getProducts(payload) {
    console.log("Call get products api", payload);
    let res = yield fetch(`http://localhost:4000/product/?${payload?.data ? `name=${payload?.data}`: ''}`);
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