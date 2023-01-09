import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean
  username: string
}

const ACCESS_KEY = 'access';
const USERNAME_KEY = 'username';

function getInitialState(): AuthState {
  return {
    isAuthenticated: Boolean(localStorage.getItem(ACCESS_KEY) ?? ''),
    username: localStorage.getItem(USERNAME_KEY) ?? ''
  }
}

const initialState: AuthState = getInitialState();

interface AuthPayload {
  access: string
  username: string
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.username = '';
      localStorage.removeItem(ACCESS_KEY);
      localStorage.removeItem(USERNAME_KEY);
    },
    loginSuccess(state, action: PayloadAction<AuthPayload>) {
      state.isAuthenticated = Boolean(action.payload.access);
      state.username = action.payload.username;    

      localStorage.setItem(ACCESS_KEY, action.payload.access);
      localStorage.setItem(USERNAME_KEY, action.payload.username);
    }
  }
})

export default authSlice.reducer;