import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import createStore from './createStore';
import persistReducers from './persistReducers';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// Middlewares settings
// const sagaMonitor =
//     process.env.NODE_ENV === 'development'
//         ? console.tron.createSagaMonitor()
//         : null;
const sagaMiddleware = createSagaMiddleware({});
const middlewares = [sagaMiddleware];

// Creating store
const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

// Running sagas
sagaMiddleware.run(rootSaga);

export { store, persistor };
