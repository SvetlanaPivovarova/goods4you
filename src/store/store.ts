import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import categoryReducer from "./reducers/CategorySlice";
import {postAPI} from "../services/PostService";
import {categoriesAPI} from "../services/CategoriesService";
import {allProductsAPI} from "../services/AllProductsService";
import {productsByCategoryAPI} from "../services/ProductsByCategoryService";


const rootReducer = combineReducers({
    userReducer,
    categoryReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [allProductsAPI.reducerPath]: allProductsAPI.reducer,
    [productsByCategoryAPI.reducerPath]: productsByCategoryAPI.reducer
})

export const setupStore = () => {
  return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware()
              .concat(postAPI.middleware)
              .concat(categoriesAPI.middleware)
              .concat(allProductsAPI.middleware)
              .concat(productsByCategoryAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
