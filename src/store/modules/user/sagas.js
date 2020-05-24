import { all, put, takeLatest } from 'redux-saga/effects';
import { likeProductSuccess, likeProductFailure } from './actions';

export function* like({ payload }) {
    const { product } = payload;

    if (product) {
        return yield put(likeProductSuccess(product));
    }

    return yield put(likeProductFailure());
}

export default all([takeLatest('@user/LIKE_PRODUCT_REQUEST', like)]);
