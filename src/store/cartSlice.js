import { createSlice } from "@reduxjs/toolkit";


const loadCartFromLocalStorage = () => {
    try {
        const savedCart = localStorage.getItem("cartItems");
        if(savedCart){
            return JSON.parse(savedCart);
        }
        return [];
    } catch (e) {
        return [];
    }
}

const initialState = {
    items: loadCartFromLocalStorage(),
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload
            state.items.push(item);
            localStorage.setItem("cartItems", JSON.stringify(state.items))

        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.title !== action.payload.title)
            localStorage.setItem("cartItems", JSON.stringify(state.items))
        }
    }
});

export const {addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;