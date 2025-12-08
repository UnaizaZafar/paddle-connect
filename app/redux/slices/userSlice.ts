import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  // Login data
  id: number;
  email: string;
  name: string;
  role: string;
  token: string;
  // Registration data
  userId: string;
  isFromSignup: boolean;
}

const initialState: UserState = {
  id: 0,
  email: "",
  name: "",
  role: "",
  token: "",
  userId: "",
  isFromSignup: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Login action
    addLoginData: (
      state,
      action: PayloadAction<{
        user: {
          id: number;
          email?: string;
          name?: string;
          role?: string;
        };
        token: string;
      }>
    ) => {
      const { user, token } = action.payload;

      state.id = user.id;
      state.email = user.email ?? state.email;
      state.name = user.name ?? state.name;
      state.role = user.role ?? "";
      state.token = token;
    },

    // Registration action
    registerData: (
      state,
      action: PayloadAction<{
        email?: string;
        userId?: string;
        name?: string;
        isFromSignup?: boolean;
      }>
    ) => {
      if (action.payload.userId) {
        state.userId = action.payload.userId;
      }
      if (action.payload.email) {
        state.email = action.payload.email;
      }
      if (action.payload.name) {
        state.name = action.payload.name;
      }
      if (action.payload.isFromSignup !== undefined) {
        state.isFromSignup = action.payload.isFromSignup;
      }
    },

    // Clear all user data
    removeUserData: (state) => {
      state.id = 0;
      state.email = "";
      state.name = "";
      state.role = "";
      state.token = "";
      state.userId = "";
      state.isFromSignup = false;
    },

    // Legacy actions for backward compatibility
    removeLoginData: (state) => {
      state.id = 0;
      state.email = "";
      state.name = "";
      state.role = "";
      state.token = "";
    },

    removeRegisterData: (state) => {
      state.email = "";
      state.userId = "";
      state.name = "";
      state.isFromSignup = false;
    },
  },
});

export const {
  addLoginData,
  registerData,
  removeUserData,
  removeLoginData,
  removeRegisterData,
} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
// Legacy selector for backward compatibility
export const selectRegister = (state: RootState) => state.user;
export default userSlice.reducer;
