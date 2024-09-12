import { createSlice } from "@reduxjs/toolkit";

const restaurantUpdateSlice = createSlice({
  name: "restaurant Update",
  initialState: {
    payload: {
      csrfToken: "",
      nextOffset: "",
      widgetOffset: "",
    },
  },
  reducers: {
    addData: (state, action) => {
      state.payload.csrfToken = action.payload.csrfToken;
      state.payload.nextOffset = action.payload.nextOffset;
      state.payload.widgetOffset = action.payload.widgetOffset;
    },
  },
});

export const { addData } = restaurantUpdateSlice.actions;
export default restaurantUpdateSlice.reducer;
