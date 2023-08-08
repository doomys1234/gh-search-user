import { UserState } from "../../types/types";

export const getUserInfoSelector = (state:UserState) => {
  return state.userControl.userInfo;
};

export const getUsernameSelector = (state:UserState) => {
  return state.userControl.username;
};