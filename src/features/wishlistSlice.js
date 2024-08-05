import {createSlice} from "@reduxjs/toolkit"


export const wishlistSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:[]
  },
  reducers: {
     addtofavorate : (state,actions)=>{
        console.log(actions)
        state.cart.push(actions.payload)
     }
  }
})

// Action creators are generated for each case reducer function
export const { addtofavorate } = wishlistSlice.actions

export default wishlistSlice.reducer