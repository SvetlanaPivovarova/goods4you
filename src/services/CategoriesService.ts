import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const categoriesAPI = createApi({
    reducerPath: 'categoriesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (build) => ({
        fetchAllCategories: build.query<string[], string>({
            query: () => ({
                url: `/products/categories`,
            })
        })
    })
})