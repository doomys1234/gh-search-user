import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, InitialState } from "../../types/types";

const initialState: InitialState = {
    username: "",
    userInfo: null,
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    saveUser: (state, action: PayloadAction<User | null>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { saveUsername, saveUser } = userSlice.actions;

export default userSlice.reducer;
