import { all, takeLatest, put, select } from 'redux-saga/effects';
import { addToCartSuccess, addToCartFailure } from './actions';

export function* cart({ payload }) {
    const { product } = payload;

    const products = yield select(state => state.cart.products);
    const productExists = products.find(
        cartProduct => cartProduct.id === payload.product.id
    );

    if (product && !productExists) {
        return yield put(addToCartSuccess(product));
    }
    return yield put(addToCartFailure());
}

export default all([takeLatest('@cart/ADD_PRODUCT_REQUEST', cart)]);
