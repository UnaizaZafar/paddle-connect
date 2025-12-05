import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface RegisterState {
  email: string;
  userId: string;
}

const initialState: RegisterState = {
  email: "",
  userId: "",
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerData: (state, action: PayloadAction<RegisterState>) => {
      state.userId = action.payload.userId || "";
      state.email = action.payload.email || "";
    },
  },
});

export const { registerData } = registerSlice.actions;
export const selectRegister = (state: RootState) => state.register;
export default registerSlice.reducer;
