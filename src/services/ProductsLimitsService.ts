import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProductsResponse} from "../models/IProductsResponse";

export const productsLimitsAPI = createApi({
    reducerPath: 'productsLimitsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (build) => ({
        fetchProductsLimits: build.query<IProductsResponse, number>({
            query: (skip: number) => ({
                url: `/products?limit=9&skip=${skip}`,
            })
        })
    })
})