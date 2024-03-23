import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice"
import {postAPI} from "../services/PostService";
import {categoriesAPI} from "../services/CategoriesService";
import {allProductsAPI} from "../services/AllProductsService";


const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [allProductsAPI.reducerPath]: allProductsAPI.reducer
})

export const setupStore = () => {
  return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(postAPI.middleware).concat(categoriesAPI.middleware).concat(allProductsAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
