import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface RegisterState {
  token: string;
  email: string;
  password: string;
  name: string;
  fullName: string;
}

const initialState: RegisterState = {
  token: "",
  email: "",
  password: "",
  name: "",
  fullName: "",
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerData: (state, action: PayloadAction<Partial<RegisterState>>) => {
      state.token = action.payload.token || "";
      state.email = action.payload.email || "";
      state.password = action.payload.password || "";
      state.name = action.payload.name || "";
      state.fullName = action.payload.fullName || "";
    },
  },
});

export const { registerData } = registerSlice.actions;
export const selectRegister = (state: RootState) => state.register;
export default registerSlice.reducer;
