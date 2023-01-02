import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice";

const rootReducer = combineReducers({
  team: cardReducer
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']