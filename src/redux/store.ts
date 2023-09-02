import { myreducer } from "./reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { myAPi } from "./api";

export const store = configureStore({
  reducer: {
    [myAPi.reducerPath]: myAPi.reducer,
    [myreducer.name]: myreducer.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(myAPi.middleware)
});
