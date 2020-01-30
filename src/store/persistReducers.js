import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer(
        { key: 'amazon-next', storage, whitelist: ['cart', 'user'] },
        reducers
    );

    return persistedReducer;
};
