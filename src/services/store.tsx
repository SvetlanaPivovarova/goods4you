import { configureStore } from "@reduxjs/toolkit";
//import { offline } from '@redux-offline/redux-offline'
//import offlineConfig from '@redux-offline/redux-offline/lib/defaults'

import counterReducer from "../services/slices/counter-slice"
//import { middleware1 } from "./middlewares/middleware1";
//import { middleware2 } from "./middlewares/middleware2";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    //middleware: (getDefaultMiddleware) => {
    //    return getDefaultMiddleware().concat(middleware1, middleware2);
    //},
   // enhancers: (getDefaultEnhancers) => {
    //    return getDefaultEnhancers().concat(offline(offlineConfig));
    //}
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch