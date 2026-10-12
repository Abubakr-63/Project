import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { IResponse } from "../types/type";

export const todoAPI = createApi({
    reducerPath : 'todoAPI',
    baseQuery : fetchBaseQuery({ baseUrl : 'https://to-dos-api.softclub.tj/api/'}),
    endpoints : (build) => ({
        getTodo : build.query<IResponse, unknown>({
            query: () => `to-dos`
        }),
        deleteTodo : build.mutation<IResponse, number>({
            query : (id:number) => ({
                url : `to-dos?id=${id}`,
                method : 'DELETE'
            })
        }),
        addTodo : build.mutation<IResponse, unknown>({
            query : (body) => ({
                url : `to-dos`,
                method : 'POST',
                body
            })
        }),
        editTodo : build.mutation<IResponse, unknown>({
            query : (body) => ({
                url : `to-dos`,
                method : 'PUT',
                body
            }) 
        })
    })
});

export const {useGetTodoQuery, useDeleteTodoMutation, useAddTodoMutation, useEditTodoMutation} = todoAPI;