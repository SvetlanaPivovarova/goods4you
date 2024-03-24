import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../models/IProduct";

export const productsLimitsAPI = createApi({
    reducerPath: 'productsLimitsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (build) => ({
        fetchProductsLimits: build.query<IProduct[], number>({
            query: (skip: number) => ({
                url: `/products?limit=9&skip=${skip}`,
            })
        })
    })
})