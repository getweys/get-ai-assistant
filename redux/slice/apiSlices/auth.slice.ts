import { BASE_URL, SESSION } from "@/constants";
import { getCookie } from "@/lib/cookies";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = getCookie(SESSION);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const authSlice = createApi({
  reducerPath: "authSlice",
  baseQuery: baseQuery,

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
    // refreshToken: builder.mutation({
    //   query: (payload) => ({
    //     url: "/auth/refresh",
    //     method: "POST",
    //     body: payload,
    //   }),
    // }),
    logout: builder.mutation({
      query: (payload) => ({
        url: "/auth/logout",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authSlice;
