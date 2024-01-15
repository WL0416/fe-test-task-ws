import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
