import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import wishlistSlice from '../features/wishlistSlice'

export default configureStore({
  reducer: {
    Allcart:cartSlice,
    Allfavorate:wishlistSlice
  }
 
})