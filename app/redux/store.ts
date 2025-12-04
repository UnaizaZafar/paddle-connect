import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/app/redux/slices/userSlice";
import inviteReducer from "@/app/redux/slices/inviteOwnerSlice";
import registerReducer from "@/app/redux/slices/registerSlice";
import {
  persistStore,
  persistReducer, // Import the action type constants here
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};
const rootReducer = combineReducers({
  login: loginReducer,
  invite: inviteReducer,
  register: registerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Configure the middleware to ignore the redux-persist action types
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
