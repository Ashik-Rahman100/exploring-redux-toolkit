const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            console.log(action);
            state.cart.push(action.payload)
        }
    }
});

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;