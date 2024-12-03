import { configureStore } from "@reduxjs/toolkit";
import AuthServices from "./services/AuthServices";
import AuthReducer from "./reducers/AuthReducer";
import ContactServices from "./services/ContactServices";
const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    [AuthServices.reducerPath]: AuthServices.reducer,
    [ContactServices.reducerPath]: ContactServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      AuthServices.middleware,
      ContactServices.middleware,
    ]),
});

export default store;
