import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  revenue: [
    { month: "Jan", value: 4000 },
    { month: "Feb", value: 3000 },
    { month: "Mar", value: 5000 },
    { month: "Apr", value: 7000 },
  ],

  users: [
    { month: "Jan", users: 200 },
    { month: "Feb", users: 350 },
    { month: "Mar", users: 500 },
    { month: "Apr", users: 800 },
  ]
}

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {}
})

export default analyticsSlice.reducer