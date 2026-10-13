import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { IResponse } from "../types/type";

export const todoAPI = createApi({
    reducerPath : 'todoAPI',
    baseQuery : fetchBaseQuery({ baseUrl : '/api/'}),
    tagTypes : ['ToDo'],
    endpoints : (build) => ({
        getTodo : build.query<IResponse, unknown>({
            query: () => `todos`,
            providesTags : ['ToDo']
        }),
        deleteTodo : build.mutation<IResponse, number>({
            query : (id:number) => ({
                url : `todos/${id}`,
                method : 'DELETE'
            }),
            invalidatesTags: ["ToDo"],
        }),
        addTodo : build.mutation<IResponse, unknown>({
            query : (body) => ({
                url : `todos`,
                method : 'POST',
                body
            }),
            invalidatesTags : ['ToDo']
        }),
        editTodo : build.mutation<IResponse, unknown>({
            query : ({id, ...body}) => ({
                url : `todos/${id}`,
                method : 'PATCH',
                body
            }),
            invalidatesTags: ["ToDo"],
        })
    })
});

export const {useGetTodoQuery, useDeleteTodoMutation, useAddTodoMutation, useEditTodoMutation} = todoAPI;