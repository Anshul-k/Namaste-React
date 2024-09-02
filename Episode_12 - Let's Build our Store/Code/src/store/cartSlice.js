import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla(Older) Redux => DON'T MUTATE THE STATE, returning was mandatory
      // const newState = [...state]
      // newState.items.push(action.payload)
      // return newState

      // Mutating the State here

      // Redux Toolkit
      // Redux uses Immer library behind the scene for finding the difference between the current state and the changed state and provide
      // a new immutabe state to the redux, so we don't have to make the immutable state.
      // We have to mutate the State
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // RTK = either mutate the state or return a new state
      // return { items: [] }   ====  This will also provide the same result
      state.items.length = 0; // []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
