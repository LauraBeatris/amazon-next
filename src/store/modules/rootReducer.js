import { combineReducers } from 'redux';

import cart from './cart/reducers';
import checkout from './checkout/reducers';
import user from './user/reducers';

export default combineReducers({ cart, checkout, user });
