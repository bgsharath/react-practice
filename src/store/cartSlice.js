import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
        id:1
    },
    reducers: {
        addCart(state,action){
            state.items.push(action.payload)
        },
        clearCart(state){
            state.items.length = 0
        }
    }
});

export const {addCart,clearCart} = cartSlice.actions;

export default cartSlice.reducer;