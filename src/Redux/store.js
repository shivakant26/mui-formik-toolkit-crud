import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./userSlice";
import roleSlice from "./roleSlice";


const reducer = combineReducers({
    authSlice,
    roleSlice
  })

const store = configureStore({
    reducer
})

export default store;