import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPosts} from "../models/IPosts";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPosts[], number>({
            query: (limit: number= 5) => ({
                url: `/posts4`,
                params: {
                    _limit: limit
                }
            })
        })
    })
})