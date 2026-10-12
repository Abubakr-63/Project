import { configureStore } from "@reduxjs/toolkit";
import { todoAPI } from "./dataApi";

export const store = configureStore({
    reducer : {
        [todoAPI.reducerPath] : todoAPI.reducer
    },
    middleware: (getDefault) => getDefault().concat(todoAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch