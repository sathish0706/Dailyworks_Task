import { configureStore } from "@reduxjs/toolkit";
import userRegisterSliceReducer from "./Reducer/userRegisterSlice.reducer";
// ROOT REDUCER
export default configureStore({
  reducer: {
    userRegisterReducer: userRegisterSliceReducer,
  },
});
