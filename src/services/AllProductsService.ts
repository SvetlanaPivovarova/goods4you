import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../models/IProduct";

export const allProductsAPI = createApi({
    reducerPath: 'allProductsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProduct[], number>({
            query: (limit: number = 0) => ({
                url: `/products`,
                params: {
                    _limit: limit
                }
            })
        })
    })
})