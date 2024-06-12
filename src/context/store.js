import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/index";
import singleReducer from "./slice/singleSlice";
import wishlistReducer from './slice/wishlistSlice'
import cartReducer from './slice/cartSlice'
import categorySlice from "./slice/categorySlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        single: singleReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
        categoryes: categorySlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
});