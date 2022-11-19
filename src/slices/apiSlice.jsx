import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const yarriCall = createApi({ 
    reducerPath: 'yarriCall',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),

    endpoints: (builder) => ({
        getAllProducts: builder.query({ 
            query: (name) => `products/${name}`}),
            
})
})

export const { useGetAllProductsQuery } = yarriCall;
