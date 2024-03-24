import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../models/IProduct";

export const productsByCategoryAPI = createApi({
    reducerPath: 'productsByCategoryAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (build) => ({
        fetchProductsByCategory: build.query<IProduct[], string>({
            query: (name: string) => ({
                url: `/products/category/${name}`,
            })
        })
    })
})