
import {persistStore,persistReducer} from 'redux-persist';
import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers/index';

const persistConfig ={
    key:'root',
    storage,
    whiteList:['usuario']
}
const pReducer = persistReducer(persistConfig,Reducers);
const store = createStore(pReducer);;
const persistor = persistStore(store);

export {store,persistor}