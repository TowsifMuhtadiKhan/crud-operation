// postApi.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      query: () => 'posts',
    }),
    createPost: builder.mutation<void, { title: string; body: string }>({
      query: ({ title, body }) => ({
        url: 'posts',
        method: 'POST',
        body: { title, body },
       
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
