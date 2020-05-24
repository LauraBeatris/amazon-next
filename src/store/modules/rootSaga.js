import { all } from 'redux-saga/effects';

import cartSaga from './cart/sagas';
import userSaga from './user/sagas';
import checkoutSaga from './checkout/sagas';

export default function* rootSaga() {
    return yield all([cartSaga, userSaga, checkoutSaga]);
}
