import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../types/types";
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/users/",
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query<User, string>({
      query: (username) => `/${username}`,
    }),
  }),
});
export const { useGetUserInfoQuery } = usersApi;
