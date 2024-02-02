import { createSlice } from "@reduxjs/toolkit";
export { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    menuopen: true,
  },

  reducers: {
    togglemenu: (state) => {
      state.menuopen = !state.menuopen;
    },
  },
});

export const { togglemenu } = appSlice.actions;
export default appSlice.reducer;
