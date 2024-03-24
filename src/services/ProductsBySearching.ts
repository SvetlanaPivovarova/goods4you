import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../models/IProduct";

export const productsBySearchingAPI = createApi({
    reducerPath: 'productsBySearchingAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (build) => ({
        fetchProductsBySearching: build.query<IProduct[], string>({
            query: (select: string) => ({
                url: `/products/search`,
                params: {
                    q: select
                }
            })
        })
    })
})