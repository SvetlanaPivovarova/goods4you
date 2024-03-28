import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProductsResponse} from "../models/IProductsResponse";

export const productsBySearchingAPI = createApi({
    reducerPath: 'productsBySearchingAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (build) => ({
        fetchProductsBySearching: build.query<IProductsResponse, string>({
            query: (select: string) => ({
                url: `/products/search`,
                params: {
                    q: select
                }
            })
        })
    })
})