import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    show: false,
    message: "",
    type: "",
    time: 3000,
  },
  reducers: {
    showSnackbar: (state, action) => {
      state.show = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.time = action.payload.time;
    },
    hideSnackbar: (state) => {
      state.show = false;
      state.message = "";
      state.type = "";
      state.time = 3000;
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
