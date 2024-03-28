import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "./reducers/SearchSlice";
import categoryReducer from "./reducers/CategorySlice";
import {categoriesAPI} from "../services/CategoriesService";
import {allProductsAPI} from "../services/AllProductsService";
import {productsBySearchingAPI} from "../services/ProductsBySearching";
import {productsLimitsAPI} from "../services/ProductsLimitsService";


const rootReducer = combineReducers({
    searchReducer,
    categoryReducer,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [allProductsAPI.reducerPath]: allProductsAPI.reducer,
    [productsBySearchingAPI.reducerPath]: productsBySearchingAPI.reducer,
    [productsLimitsAPI.reducerPath]: productsLimitsAPI.reducer
})

export const setupStore = () => {
  return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware()
              .concat(categoriesAPI.middleware)
              .concat(allProductsAPI.middleware)
              .concat(productsBySearchingAPI.middleware)
              .concat(productsLimitsAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
