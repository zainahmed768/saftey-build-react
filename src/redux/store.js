// import { configureStore } from "@reduxjs/toolkit";
// import AuthServices from "./services/AuthServices";
// import AuthReducer from "./reducers/AuthReducer";
// import ContactServices from "./services/ContactServices";
// import FaqServices from "./services/FaqServices";
// import SiteSettingServices from "./services/SiteSettingServices";
// import CourseServices from "./services/CourseServices";
// import CartReducer from "./reducers/CartReducer";

// const store = configureStore({
//   reducer: {
//     AuthReducer: AuthReducer,
//     CartReducer: CartReducer,
//     [AuthServices.reducerPath]: AuthServices.reducer,
//     [ContactServices.reducerPath]: ContactServices.reducer,
//     [FaqServices.reducerPath]: FaqServices.reducer,
//     [SiteSettingServices.reducerPath]: SiteSettingServices.reducer,
//     [CourseServices.reducerPath]: CourseServices.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat([
//       AuthServices.middleware,
//       ContactServices.middleware,
//       FaqServices.middleware,
//       SiteSettingServices.middleware,
//       CourseServices.middleware,
//     ]),
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage as default storage
import AuthServices from "./services/AuthServices";
import AuthReducer from "./reducers/AuthReducer";
import ContactServices from "./services/ContactServices";
import FaqServices from "./services/FaqServices";
import SiteSettingServices from "./services/SiteSettingServices";
import CourseServices from "./services/CourseServices";
import CartReducer from "./reducers/CartReducer";
import PaymentServices from "./services/PaymentServices";

// Persist configuration for CartReducer
const cartPersistConfig = {
	key: "cart",
	storage, // Use localStorage for persistence
};
// Wrap the CartReducer with persistReducer
const persistedCartReducer = persistReducer(cartPersistConfig, CartReducer);

const store = configureStore({
	reducer: {
		AuthReducer: AuthReducer,
		CartReducer: persistedCartReducer, // Use the persisted reducer here
		[AuthServices.reducerPath]: AuthServices.reducer,
		[ContactServices.reducerPath]: ContactServices.reducer,
		[FaqServices.reducerPath]: FaqServices.reducer,
		[SiteSettingServices.reducerPath]: SiteSettingServices.reducer,
		[CourseServices.reducerPath]: CourseServices.reducer,
		[PaymentServices.reducerPath]: PaymentServices.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // Required to handle non-serializable actions from redux-persist
		}).concat([
			AuthServices.middleware,
			ContactServices.middleware,
			FaqServices.middleware,
			SiteSettingServices.middleware,
			CourseServices.middleware,
			PaymentServices.middleware,
		]),
});

// Persist the store
export const persistor = persistStore(store);

export default store;
