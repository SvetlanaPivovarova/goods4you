import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "./reducers/SearchSlice";
import categoryReducer from "./reducers/CategorySlice";
import {categoriesAPI} from "../services/CategoriesService";
import {allProductsAPI} from "../services/AllProductsService";


const rootReducer = combineReducers({
    searchReducer,
    categoryReducer,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [allProductsAPI.reducerPath]: allProductsAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware()
              .concat(categoriesAPI.middleware)
              .concat(allProductsAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
