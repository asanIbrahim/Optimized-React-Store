import  { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../future/cart/cartSlice'

const store = configureStore({
 reducer:{
 cart:cartReducer
 }
})

export default store