import { AppDispatch } from "..";
import { IAuth } from "../../models/models";
import { authSlice } from "../slices/authSlice";

export const login = (data: IAuth) => {
  return (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.loginSuccess({
        access: 'valid',
        username: data.login
      }))
    } catch (e) {
      throw Error(`Error login ${e}`)
    }
  }
}