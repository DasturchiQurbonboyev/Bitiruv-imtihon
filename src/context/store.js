import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/index";
import singleReducer from "./slice/singleSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        single: singleReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
});