import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import analyticsReducer from "./analyticsSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    analytics: analyticsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
