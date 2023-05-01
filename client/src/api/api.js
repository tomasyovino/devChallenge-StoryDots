import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Products"],
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => "/products",
            providesTags: ["Products"]
        }),
    })
});

export const { useGetProductsQuery } = api;