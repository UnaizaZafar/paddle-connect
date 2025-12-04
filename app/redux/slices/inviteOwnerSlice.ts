import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface OwnerInvitePayload {
  emails: string[];
}
const initialState: OwnerInvitePayload = {
  emails: [],
};
const inviteOwnerSlice = createSlice({
  name: "invite",
  initialState,
  reducers: {
    inviteGymOwner: (
      state,
      action: PayloadAction<{
        emails: string[];
      }>
    ) => {
      const { emails } = action.payload;

      state.emails = emails;
    },
  },
});

export const { inviteGymOwner } = inviteOwnerSlice.actions;
export const selectInvite = (state: RootState) => state.invite;
export default inviteOwnerSlice.reducer;
