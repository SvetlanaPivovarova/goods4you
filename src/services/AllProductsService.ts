import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProductsResponse} from "../models/IProductsResponse";

export const allProductsAPI = createApi({
    reducerPath: 'allProductsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProductsResponse, number>({
            query: (limit: number = 0) => ({
                url: `/products`,
                params: {
                    limit: limit
                }
            })
        }),
        fetchProductsBySearching: build.query<IProductsResponse, string>({
            query: (select: string) => ({
                url: `/products/search`,
                params: {
                    q: select
                }
            })
        }),
        fetchProductsLimits: build.query<IProductsResponse, number>({
            query: (skip: number) => ({
                url: `/products?limit=9&skip=${skip}`,
            })
        })
    })
})