import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "/categories",
        }),
    }),
});

export const { useGetCategoriesQuery } = apiSlice;
