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

export const connectedSystemSlice = createApi({
  reducerPath: "connectedSystemSlice",
  baseQuery: baseQuery,

  endpoints: (builder) => ({
    connectedSystem: builder.query({
      query: () => ({
        url: "/connected-systems",
        method: "GET",
      }),
    }),
  }),
});

export const { useConnectedSystemQuery } = connectedSystemSlice;
