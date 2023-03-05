import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import likeReducer from './likeReducer'
import ProductsReducer from './ProductsReducer'

export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
        productsIncart: cartReducer,
        products: ProductsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

