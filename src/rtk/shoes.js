// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shoeApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/shoe/' }),
  tagTypes: ['Shoes'],
  endpoints: (build) => ({
    getShoes: build.query({
      query: () => 'list',
      // Provides a list of `Posts` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: 'Posts', id })),
              { type: 'Shoes', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: 'Shoes', id: 'LIST' }],
    }),
    addShoe: build.mutation({
      query(body) {
        return {
          url: `shoe`,
          method: 'POST',
          body,
        }
      },
      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: 'Shoes', id: 'LIST' }],
    }),
    getShoe: build.query({
      query: (id) => `${id}`,
      providesTags: (result, error, id) => [{ type: 'Shoes', id }],
      transformResponse:arg=>{return Object.assign({shoe:{id:arg.id,shoename:arg.shoename,description:arg.description, imageUrl:arg.imageUrl},

       price:arg.price})}
    }),
    updateShoe: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `post/${id}`,
          method: 'PUT',
          body,
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Shoes', id }],
    }),
    deleteShoe: build.mutation({
      query(id) {
        return {
          url: `post/${id}`,
          method: 'DELETE',
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Shoes', id }],
    }),
  }),
})

export const {
  useGetShoesQuery,
  useAddShoeMutation,
  useGetShoeQuery,
  useUpdateShoeMutation,
  useDeleteShoeMutation,
} = shoeApi