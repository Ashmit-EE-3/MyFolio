import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice"
import {persistReducer} from 'redux-persist' ; 
import storage from 'redux-persist/lib/storage' ; 
import persistStore from "redux-persist/es/persistStore";
import socialReducer from './features/socials/socialSlice' ; 

const rootReducer = combineReducers({
    user : userReducer,
    social: socialReducer 
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,

}
const persistedReducer = persistReducer(persistConfig, rootReducer) ; 

export const store  = configureStore({
    reducer: persistedReducer,
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware({
          serializableCheck: false, 
    }), 
});

export const persistor = persistStore(store);