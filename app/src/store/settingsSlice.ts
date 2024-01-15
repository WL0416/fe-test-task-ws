import { createSlice } from "@reduxjs/toolkit";
import { LIMIT_DEFAULT } from "../config";

const settingsSlice = createSlice({
  name: "settings",
  initialState: { limit: LIMIT_DEFAULT },
  reducers: {
    limitChange(state, action) {
      state.limit = action.payload;
    },
  },
});

export const { limitChange } = settingsSlice.actions;
export default settingsSlice.reducer;
