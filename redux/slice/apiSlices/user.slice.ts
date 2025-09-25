import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL, SESSION } from "@/constants";
import { getCookie } from "@/lib/cookies";

export const userSlice = createApi({
  reducerPath: "userSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getCookie(SESSION);
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useProfileQuery } = userSlice;
