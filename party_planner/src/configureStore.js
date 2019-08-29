import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'


import { globalReducer } from './reducers'


const persistConfig = {
    key: 'globalReducer',
    storage,
}

const persistedReducer = persistReducer(persistConfig, globalReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

