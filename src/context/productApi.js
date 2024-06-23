import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: (params) => ({
        url: "/products/search",
        params,
      }),
      providesTags: ["Product"],
    }),
    createProduct: build.mutation({
      query: (body) => ({
        url: "/products/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: build.mutation({
      query: ({ _id, body }) => ({
        url: `/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductQuery,
  useDeleteProductMutation,
} = productApi;
