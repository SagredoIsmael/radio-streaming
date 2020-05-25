import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import { rootReducer } from './reducers'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: [
        'user'
    ],
    blacklist: [
        'request'
    ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    applyMiddleware(ReduxThunk, logger))

export const persistor = persistStore(store)