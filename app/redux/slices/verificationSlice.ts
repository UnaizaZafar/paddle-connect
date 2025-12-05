import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface VerificationSlice {
  token: string;
  userId: string;
}

const initialState: VerificationSlice = {
  token: "",
  userId: "",
};
const verificationSlice = createSlice({
  name: "verifiy",
  initialState,
  reducers: {
    verifyData: (state, action: PayloadAction<VerificationSlice>) => {
      state.userId = action.payload.userId || "";
      state.token = action.payload.token || "";
    },
  },
});

export const { verifyData } = verificationSlice.actions;
export const selectVerifyCode = (state: RootState) => state.verify;
export default verificationSlice.reducer;
