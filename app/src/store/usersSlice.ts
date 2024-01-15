import { createSlice } from "@reduxjs/toolkit";
import type { usersType } from "../types";
import { containUser } from "../utils";

const initialState: usersType = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      const user = action.payload.user;
      if (!containUser(user, state)) {
        state.push(user);
        if (state.sort((a, b) => b.score - a.score).length > 20) state.pop();
      }
    },
    userRemove(state, action) {
      const index = action.payload;
      state.splice(index, 1);
    },
  },
});

export const { userAdded, userRemove } = usersSlice.actions;
export default usersSlice.reducer;
