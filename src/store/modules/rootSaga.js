import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import user from './user/sagas';
import checkout from './checkout/sagas';

export default function* rootSaga() {
    return yield all([cart, user, checkout]);
}
