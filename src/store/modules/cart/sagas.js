import { all, takeLatest, put, select } from 'redux-saga/effects';
import {
    addToCartSuccess,
    addToCartFailure,
    removeFromCartSuccess,
    removeFromCartFailure,
} from './actions';

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

export function* remove({ payload }) {
    const { id } = payload;

    const isSelected = yield select(state =>
        state.cart.products.find(product => product.id === id)
    );

    if (isSelected) return yield put(removeFromCartSuccess(id));
    return yield put(removeFromCartFailure());
}

export default all([
    takeLatest('@cart/ADD_PRODUCT_REQUEST', cart),
    takeLatest('@cart/REMOVE_PRODUCT_REQUEST', remove),
]);
