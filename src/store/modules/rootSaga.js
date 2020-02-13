import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import user from './user/sagas';

export default function* rootSaga() {
    return yield all([cart, user]);
}
