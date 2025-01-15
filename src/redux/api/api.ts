import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl:import.meta.env.VITE_API_BASE_URL }),
  //NOTE AddedTags when you are going provider with this tags ann mutation will be invalid this tag
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        //NOTE this will be used when you want to send query with the url but your priority have not .
        if (priority) {
          params.append("priority", priority);
        }
        return {
          // NOTE when you want to send url throw
          // url: `/tasks?priority=${priority}`,
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      //NOTE using tags like rape with baseApi with tags then providedWithRapping tags
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      //NOTE Then mutation will be invalid the tags
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (options) => {
        console.log("Inside base api=>", options);
        return {
          url: `/task/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      //NOTE Then mutation will be invalid the tags
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/task/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = baseApi;
