import { BASE_URL } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  reducerPath: "authSlice",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
    refreshToken: builder.mutation({
      query: (payload) => ({
        url: "/auth/refresh",
        method: "POST",
        body: payload,
      }),
    }),
    logout: builder.mutation({
      query: (payload) => ({
        url: "/auth/logout",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation } = authSlice;
