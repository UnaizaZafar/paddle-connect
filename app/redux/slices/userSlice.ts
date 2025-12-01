import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface UserPayload {
  id: number;
  email: string;
  name: string;
  role: string;
  token: string;
}
const initialState: UserPayload = {
  id: 0,
  email: "",
  name: "",
  role: "",
  token: "",
};
const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
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
      state.email = user.email ?? "";
      state.name = user.name ?? "";
      state.role = user.role ?? "";
      state.token = token;
    },

    removeLoginData: (state) => {
      state.id = 0;
      state.email = "";
      state.name = "";
      state.role = "";
      state.token = "";
    },
  },
});

export const { addLoginData, removeLoginData } = userSlice.actions;
export const selectUser = (state: RootState) => state.login;
export default userSlice.reducer;
